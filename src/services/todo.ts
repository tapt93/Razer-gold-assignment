export const getTodoData = async () => {
  const response = await fetch('src/services/mock_data.json');
  return await response.json();
}