import { useSQLiteContext } from "expo-sqlite";

export function useTasksDatabase() {
  const database = useSQLiteContext();

  async function create(task) {
    const statement = await database.prepareAsync(
      "INSERT INTO tasks (title, description) VALUES ($title, $description)"
    );

    try {
      await statement.executeAsync({
        $title: task.title,
        $description: task.description,
      });
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function show() {
    try {
      const query = "SELECT * FROM tasks ORDER BY create_date desc";

      const response = await database.getAllAsync(query);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function remove(id) {
    try {
      const query = `DELETE FROM tasks WHERE id = ${id}`;
      await database.execAsync(query);
    } catch (error) {
      throw error;
    }
  }

  async function update(task) {
    const statement = await database.prepareAsync(
      "UPDATE tasks SET title = $title, description = $description WHERE id = $id"
    );

    try {
      await statement.executeAsync({
        $id: task.id,
        $title: task.title,
        $description: task.description,
      });
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function updateStatus(id) {
    try {
      const query = `UPDATE tasks SET done = not done WHERE id = ${id}`;
      await database.execAsync(query);
    } catch (error) {
      throw error;
    }
  }

  return { create, show, remove, update, updateStatus };
}