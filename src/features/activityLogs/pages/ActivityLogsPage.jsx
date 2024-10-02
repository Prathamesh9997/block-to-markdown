import { useEffect, useState } from "react";
import { useProjectStore } from "@store/projectStore";
import { Box, Text } from "@chakra-ui/react";

const ActivityLogsPage = () => {
  const { selectedProject } = useProjectStore();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Fetch activity logs based on the selected project
    fetch(`/api/projects/${selectedProject}/activity-logs`)
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, [selectedProject]);

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Activity Logs for Project {selectedProject}
      </Text>
      {logs.map((log) => (
        <Box key={log.id} p={4} bg="gray.100" borderRadius="md" mb={2}>
          <Text>{log.message}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ActivityLogsPage;
