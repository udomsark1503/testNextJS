import React from "react";
import Image from "next/image";

const about = () => {
    return (
        <div>

        <div className="BlogMap">
            <div>
                <Image className="MyMap" src='/Map-Home.png' width={100} height={50} alt="MyHomeMap"/>
            </div>
        </div>
        
            <div className="myinfo_contact">
                <div>
                    <strong>Udomsark Amnuaysookwong</strong>
                    <p>
                    Age 26 Years <br />
                    From University (2016-2019) <br />
                    Rajamangala University of the East (Chakphong Phuwanart Campus)
                    <br />
                    Faculty of Business Management <br />
                    GPA : 3.24
                    </p>
                </div>

                <div>
                    <ul>
                        <li>My Address : 166/671 Niran Condotel 2, DonMueang</li>
                        <li>My number : 087-1503161</li>
                        <li>My E-mail : udomsark1863@hotmail.com</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default about;