import Banner from "@/components/Banner";
import Products from "@/components/Products";

export default async function Home() {
  
//const secret = require('crypto').randomBytes(32).toString('hex');
//console.log("secret",secret);  // Save the output for the next step

   
  return (
    <main>
  
   <Banner/>
   <Products/>


    </main>


  )
}
