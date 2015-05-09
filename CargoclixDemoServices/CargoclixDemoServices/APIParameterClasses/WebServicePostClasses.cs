using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo_App.APIParameterClasses
{
    public class WebServicePostClasses
    {
        public class ReportDelay
        {
            public int bookingId { get; set; }
            public string newETA { get; set; }
            public string reasonForDelay { get; set; }
        }
    }
}