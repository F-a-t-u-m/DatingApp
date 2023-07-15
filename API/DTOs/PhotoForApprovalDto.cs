namespace API.DTOs
{
	public class PhotoForApprovalDto
	{
		public int Id { get; set; }
		public string Url { get; set; }
		public string username { get; set; }
		public bool isApproved { get; set; }
	}
}