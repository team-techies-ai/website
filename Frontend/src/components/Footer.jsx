import logo from "../assets/Untitled design 1.svg"
const Footer = () => {
  return (
    <>
    <div className=" flex text-white justify-between p-10 mt-32 sticky bottom-0 ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>company
        <ul className="font-thin">
          <li>Blog</li>
          <li>careers</li>
          <li>pricing</li>
          <li>customers</li>
          
        </ul>
      </div>
      <div>
        Resources
        <ul className="font-thin">
          <li>Documentation</li>
          <li>papers</li>
          <li>press</li>
          
        </ul>
      </div>
      <div>
        Solution 
        <ul className="font-thin">
          <li>PCI Compliance</li>
          <li>Encryption as service</li>
          <li>Credential Encryption</li>
          <li>file Encryption</li>
          <li>pil Encryption</li>
          <li>HIPAA Compliance</li>
        </ul>
      </div>
      <div>
        legal
        <ul className="font-thin">
          <li>Terms of service</li>
          <li>privacy plocicy</li>
          <li>cookies plocicy</li>
          <li>Data protection</li>
          
        </ul>
      </div>
      <div>
        complaints
        <ul className="font-thin">
          <li>PCI level 1</li>
          <li>SOC 2 Type </li>
          
        </ul>
      </div>

    </div>
    <div className="text-center items-center">   <p>&copy; Team Techies 2024 </p>
    </div>
    <div 
  className=" inset-x-0 bottom-0 h-20 w-full"
  style={{
    background: `
      radial-gradient(
        100% 100% at 50% 100%,
        #2D0C57 0%,
        rgba(45, 12, 87, 0.5) 35%,
        rgba(45, 12, 87, 0.2) 60%,
        transparent 100%
      )
    `
  }}
/>



    
    </>
  )
}

export default Footer