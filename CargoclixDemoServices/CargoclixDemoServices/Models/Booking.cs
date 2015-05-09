using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo_App.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public string DriverName { get; set; }
        public string BookingDate { get; set; }
        public string BookingTime { get; set; }
        public bool HasDelay { get; set; }
        public string NewETA { get; set; }
        public string ReasonForDelay { get; set; }
    }
}