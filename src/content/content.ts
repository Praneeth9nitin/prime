import number from "../assets/number.svg"
import calculator from "../assets/calculator.svg"
import home from "../assets/home.svg"
import contact from "../assets/contact.svg"

const loanOption = [
    {
        title: "FHA Loans",
        description: "FHA home loans are popular among first time homebuyers due to low down payment and credit requirements."
    },
    {
        title: "VA Loans",
        description: "VA loans are available to veterans and active duty military members, offering favorable terms and no down payment."
    },
    {
        title: "Conventional Loans",
        description: "Conventional loans are not insured by the government and typically require higher credit scores and down payments."
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
        link:"",
    },
    {
        img:calculator,
        title:"Estimate Your Montage Payment",
        button:"GET STARTED",
        link:"",
    },
    {
        img:home,
        title:"What's Your Home Worth Today?",
        button:"FIND OUT NOW",
        link:"",
    },
    {
        img:contact,
        title:"Real Customer Experiences",
        button:"READ REVIEWS",
        link:"",
    }
]

export {loanOption, about, cards}