import number from "../assets/number.svg"
import calculator from "../assets/calculator.svg"
import home from "../assets/home.svg"
import contact from "../assets/contact.svg"
import house1 from "../assets/image 7.png"
import house2 from "../assets/image 6.png"
import house3 from "../assets/image 8.png"

const loanOption = [
    {
        title: "FHA Loans",
        description: "FHA home loans are popular among first time homebuyers due to low down payment and credit requirements.",
        Image: house1
    },
    {
        title: "VA Loans",
        description: "VA loans are available to veterans and active duty military members, offering favorable terms and no down payment.",
        Image: house2
    },
    {
        title: "Conventional Loans",
        description: "Conventional loans are not insured by the government and typically require higher credit scores and down payments.",
        Image: house3
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