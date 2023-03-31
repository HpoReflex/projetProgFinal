using System;

namespace ComptiaServer.Inventory {
    public record InventoryItem(int Id, string Niveau, string Name, string Description, bool Active);
}
