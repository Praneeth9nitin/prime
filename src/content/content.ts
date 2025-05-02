import number from "../assets/number.svg"
import calculator from "../assets/calculator.svg"
import home from "../assets/home.svg"
import contact from "../assets/contact.svg"
import house1 from "../assets/image 7.png"
import house2 from "../assets/image 6.png"
import house3 from "../assets/image 8.png"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/insta.svg"

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
        title:"Explore Your Loan Options",
        button:"LOAN OPTIONS",
        link:"/home-loan",
    },
    {
        img:calculator,
        title:"Estimate Your Montage Payment",
        button:"GET STARTED",
        link:"/calculator",
    },
    {
        img:home,
        title:"What's Your Home Worth Today?",
        button:"FIND OUT NOW",
        link:"/home-value",
    },
    {
        img:contact,
        title:"Real Customer Experiences",
        button:"READ REVIEWS",
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

export {loanOption, about, cards, loanOptions, socialMedia}