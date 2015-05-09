using Demo_App.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Demo_App.APIParameterClasses;
using System.Web.Http.Cors;

namespace Demo_App.api
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BookingController : ApiController
    {
        // GET api/<controller>
        // Used for Getting list of Bookings
        //public IEnumerable<string> Get()
        public IEnumerable<Booking> Get()
        {
            //return new string[] { "value1", "value2" };
            IEnumerable<Booking> bookings = null;
            var server = HttpContext.Current.Server;
            using (StreamReader reader = new StreamReader(server.MapPath("~/Data/bookings.json")))
            {
                string json = reader.ReadToEnd();
                bookings = JsonConvert.DeserializeObject<IEnumerable<Booking>>(json);
            }
            return bookings;
        }

        // GET api/<controller>/5
        // Used for getting a particular Booking
        //public string Get(int id)
        public IEnumerable<Booking> Get(string phone_number)
        {
            //return "value";
            var server = HttpContext.Current.Server;
            using (StreamReader reader = new StreamReader(server.MapPath("~/Data/bookings.json")))
            {
                string json = reader.ReadToEnd();
                var bookings = JsonConvert.DeserializeObject<IEnumerable<Booking>>(json);
                var selectedBooking = bookings.Where(booking => booking.PhoneNumber == phone_number).ToList<Booking>();
                return selectedBooking;
            }
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        // Used for updating Delay
        public void Put(int id, [FromBody]WebServicePostClasses.ReportDelay value)
        {
            var server = HttpContext.Current.Server;
            string json = "";
            
            json = System.IO.File.ReadAllText(server.MapPath("~/Data/bookings.json"));
            
            var bookings = JsonConvert.DeserializeObject<IEnumerable<Booking>>(json);
            var booking = bookings.Where(b => b.Id == id).FirstOrDefault();
            if (booking != null)
            {
                booking.HasDelay = true;
                booking.NewETA = value.newETA;
                booking.ReasonForDelay = value.reasonForDelay;
            }
            
            json = JsonConvert.SerializeObject(bookings);

            //write string to file
            System.IO.File.WriteAllText(server.MapPath("~/Data/bookings.json"), json);
            //var response = Request.CreateResponse<Booking>(HttpStatusCode.OK, booking);
            //return response;
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}