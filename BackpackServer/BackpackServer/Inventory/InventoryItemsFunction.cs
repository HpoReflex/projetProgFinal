using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ComptiaServer.Inventory {
    public static class InventoryItemsFunction {
        [FunctionName("Inventory-List")]
        public static IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "InventoryItems")] HttpRequest req) {
            List<InventoryItem> items = InventoryDataManager.List().Take(100).ToList();
            return new OkObjectResult(items);
        }

        [FunctionName("InventoryItem-Get")]
        public static IActionResult Get([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "InventoryItems/{id}")] HttpRequest req, int id) {

            return new OkObjectResult(InventoryDataManager.List().FirstOrDefault(c => c.Id == id));
        }

        [FunctionName("InventoryItems-Save")]
        public static async Task<IActionResult> Save([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "InventoryItems")] HttpRequest req) {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            InventoryItem inventoryItem = JsonConvert.DeserializeObject<InventoryItem>(requestBody);

            InventoryDataManager.Save(inventoryItem);
            return new OkObjectResult(inventoryItem);
        }

        [FunctionName("InventoryItems-Update")]
        public static async Task<IActionResult> Update([HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "InventoryItems")] HttpRequest req, ILogger log) {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            InventoryItem inventoryItem = JsonConvert.DeserializeObject<InventoryItem>(requestBody);

            InventoryDataManager.Update(inventoryItem);
            return new OkObjectResult(inventoryItem);
        }

        [FunctionName("InventoryItems-Delete")]
        public static IActionResult Delete([HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = "InventoryItems/{id}")] HttpRequest req, int id, ILogger log) {
            InventoryDataManager.Delete(id);
            return new OkObjectResult(id);
        }
    }
}
