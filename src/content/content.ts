import number from "../assets/number.svg"
import calculator from "../assets/calculator.svg"
import home from "../assets/home.svg"
import contact from "../assets/contact.svg"
import house1 from "../assets/image 7.png"
import house2 from "../assets/image 6.png"
import house3 from "../assets/image 8.png"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/insta.svg"
import house4 from "../assets/download.jpg"
import house5 from "../assets/house5.jpg"

const loanOption = [
    {
        title: "FHA Loans",
        description: "FHA home loans are popular among first time homebuyers due to low down payment and credit requirements.",
        Image: house1
    },
    {
        title: "Conventional Loans",
        description: "Conventional loans are not insured by the government and typically require higher credit scores and down payments.",
        Image: house3
    },
    {
        title: "VA Loans",
        description: "VA loans are available to veterans and active duty military members, offering favorable terms and no down payment.",
        Image: house2
    },
    {
        title:"Refinance",
        description:"Refinancing can potentially lower your monthly mortgage payment, pay off your mortgage faster.",
        Image: house4
    },
    {
        title:"Affordability",
        description:"Affordability is being able to comfortably repay your mortgage repayments each month.",
        Image:house5
    },
    
]

const about=[
    {
        title:"We are a team of experienced mortgage professionals dedicated to helping you find the right loan for your needs.",
        description:""
    }
]

const cards=[
    {
        img:number,
        title:"Discover the perfect loan tailored to your goals.",
        button:"Whether you're a first-time homebuyer or refinancing, we offer flexible FHA, VA, and Conventional loans to match your needs and lifestyle.",
        link:"/home-loan",
    },
    {
        img:calculator,
        title:"Know what to expect before you apply.",
        button:"Use our simple mortgage calculator to get an instant estimate of your monthly payments—so you can plan with confidence.",
        link:"/calculator",
    },
    {
        img:home,
        title:"Find out your property’s current market value.",
        button:"Get a free, real-time home valuation based on the latest housing trends and comparable local listings.",
        link:"/home-value",
    },
    {
        img:contact,
        title:"Hear from homeowners just like you.",
        button:"Our clients love the support, simplicity, and results they get with Prime Mortgage. See their stories and reviews.",
        link:"/contact",
    }
]

const loanOptions = [
    {
        loanType: "Fixed Rate Mortgage",
        downPayment: "5%",
        terms:"15 or 30 years, fixed",
        mortageInsurance: "No (if 80% loan-to-value)",
        link:""
    },
    {
        loanType: "FHA Home Loans",
        downPayment: "3.5%",
        terms:"10, 15, 20, 25 or 30 years, fixed and adjustable",
        mortageInsurance: "Yes",
        link:""
    },
    {
        loanType: "VA Home Loans",
        downPayment: "None",
        terms:"15, 20, 25 or 30 years, fixed and adjustable",
        mortageInsurance: "No",
        link:""
    },
    {
        loanType: "Jumbo Home Loans",
        downPayment: "20%",
        terms:"15 or 30 years, fixed and adjustable",
        mortageInsurance: "No",
        link:""
    },
    {
        loanType: "USDA Home Mortgages",
        downPayment: "None",
        terms:"30 years, fixed",
        mortageInsurance: "No (Up-Front Guarantee Fee financed into loan)",
        link:""
    },
    {
        loanType: "Renovation Mortgage 203(k)",
        downPayment: "3.5%",
        terms:"30 years, fixed",
        mortageInsurance: "Yes",
        link:""
    },
    {
        loanType: "Adjustable Rate Mortgage (ARM)",
        downPayment: "Varies",
        terms:"3/1, 5/1, 7/1 or 10/1",
        mortageInsurance: "Varies",
        link:""
    },
]

const socialMedia = [
    {
        title:"Facebook",
        link:"",
        img:facebook,
    },
    {
        title:"Instagram",
        link:"",
        img:instagram,
    },
    
]

const title=["FHA Loans","Conventional","VA Loans","Refinance","Affordability"]

export {loanOption, about, cards, loanOptions, socialMedia, title}