import Account from "./components/account"
import Address from "./components/address"
import Company from "./components/company_info"
import Contact from "./components/contact_info"
import { useState } from "react"

export default function Profile(){

    const [account, setAccount]=useState(
        {
            firstName:'',
            lastName:'',
            userName:'',
            email:''
        }
    )

    const [address, setAddress]=useState(
        {
            street:'',
            suite:'',
            city:'',
            zipCode:''
        }
    )

    const [contact, setContact]=useState(
        {
            phone:'',
            website:''
        }
    )

    const [company, setCompany]=useState(
        {
            name:'',
            catchPhrase:'',
            businessStatement: ' '

        }
    )

    return(

        <div className="profile">
            <h1>Profile</h1>
            <div className="profile_info">
                <h1>FirstName Lastname</h1>

                <div className="personal_data">
                    <div><Account account={account} setAccount={setAccount}/></div>
                    <div><Address address={address} setAddress={setAddress}/></div>
                    <div><Contact contact={contact} setContact={setContact}/></div>
                    <div><Company company={company} setCompany={setCompany}/></div>

                    
                </div>
                <div>Save</div>
            </div>

        </div>
    )

    
}