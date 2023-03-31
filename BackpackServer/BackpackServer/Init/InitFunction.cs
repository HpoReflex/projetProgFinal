using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;

namespace ComptiaServer.Init {
    public static class InitFunction {
        [FunctionName("Init-CheckDB")]
        public static IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "CheckDB")] HttpRequest req) {
            return new OkObjectResult(InitDataManager.CheckDbConn());
        }

        [FunctionName("Init-InitDB")]
        public static IActionResult InitDB([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "InitDB")] HttpRequest req) {
            return new OkObjectResult(InitDataManager.InitDB());
        }
    }
}
