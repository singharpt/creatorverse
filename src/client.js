import { createClient } from "@supabase/supabase-js";

const URL = "https://plovfpygunxlrtdtgcva.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsb3ZmcHlndW54bHJ0ZHRnY3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNjA2MzQsImV4cCI6MjAwNzczNjYzNH0.qsM--3gCIy1bvCLn9RlF23qry0tG5zbGIm__itvV2z4";

const supabase = createClient(URL, API_KEY);

export default supabase;
