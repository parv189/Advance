namespace SM_Backend.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public int? Price { get; set; }
        public int? Discount   { get; set; }
        public string? Description { get; set; } = String.Empty;
        public string? Image_URL { get; set; } = String.Empty;

    }
}
