using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace ComptiaServer.Inventory {
    public static class InventoryDataManager {
        public static MySqlConnection GetConn() {
            return new MySqlConnection(Environment.GetEnvironmentVariable("MyConn"));
        }

        public static void RunCommand(string command) {
            using MySqlConnection conn = GetConn();
            conn.Open();
            Console.WriteLine(command);
            MySqlCommand c = new(command, conn);
            _ = c.ExecuteNonQuery();
        }

        public static List<InventoryItem> List() {
            List<InventoryItem> result = new();

            using (MySqlConnection conn = GetConn()) {
                conn.Open();
                MySqlCommand c = new("select Id, Niveau, Name, Description, Active from Comptia.Inventory", conn);
                using MySqlDataReader reader = c.ExecuteReader();
                while (reader.Read()) {
                    InventoryItem moodEntry = new(reader.GetInt32(0), reader.GetString(1), reader.GetString(2), reader.GetString(3), reader.GetBoolean(4));
                    result.Add(moodEntry);
                }
            }

            return result;
        }


        public static void Save(InventoryItem inventoryItem) {
            using MySqlConnection conn = GetConn();
            conn.Open();
            MySqlCommand c = new("INSERT INTO Comptia.Inventory (Niveau, Name, Description, Active) VALUES (@Niveau, @Name, @Description, @Active);", conn);
            _ = c.Parameters.AddWithValue("@Niveau", inventoryItem.Niveau);
            _ = c.Parameters.AddWithValue("@Name", inventoryItem.Name);
            _ = c.Parameters.AddWithValue("@Description", inventoryItem.Description);
            _ = c.Parameters.AddWithValue("@Active", inventoryItem.Active);
            _ = c.ExecuteNonQuery();
        }

        public static void Update(InventoryItem inventoryItem) {
            using MySqlConnection conn = GetConn();
            conn.Open();
            MySqlCommand c = new("UPDATE Comptia.Inventory SET `Niveau` = @Niveau,`Name` = @Name, Description = @Description, Active = @Active WHERE Id = @Id;", conn);
            _ = c.Parameters.AddWithValue("@Niveau", inventoryItem.Niveau);
            _ = c.Parameters.AddWithValue("@Name", inventoryItem.Name);
            _ = c.Parameters.AddWithValue("@Description", inventoryItem.Description);
            _ = c.Parameters.AddWithValue("@Active", inventoryItem.Active);
            _ = c.Parameters.AddWithValue("@Id", inventoryItem.Id);
            _ = c.ExecuteNonQuery();
        }

        public static void Delete(int id) {
            using MySqlConnection conn = GetConn();
            conn.Open();
            MySqlCommand c = new("DELETE FROM Comptia.Inventory WHERE Id= @Id;", conn);
            _ = c.Parameters.AddWithValue("@Id", id);
            _ = c.ExecuteNonQuery();
        }
    }
}