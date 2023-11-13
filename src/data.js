import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Total Body Transformation",
        info: "Achieve your dream physique with our comprehensive program for strength, agility and vitality!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Cardio Blast Challenge",
        info: "Unleash your energy and melt away calories with high intensity cardio workouts!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Yoga and Mindfulness Retreat",
        info: "Find balance and serenity with our holistic approach to yoga and inner peace!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Strength and Conditioning Bootcamp",
        info: "Build endurance, power, and resilience in our results-driven strength and conditioning bootcamp!",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Commitment",
        desc: "Dedication to your fitness goals, one step at a time."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Empowerment",
        desc: "Empowering you to take charge of your health and well-being."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Community",
        desc: "Strength in unity. We're your fitness community and support system."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Results",
        desc: "Results speak louder. Achieve your fitness goals with us."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Aim for at least 150 minutes of moderate exercise per week, or 75 minutes of vigorous activity. Find a routine that suits your schedule and goals.!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out is when it fits your schedule and when you feel most energetic. Morning workouts kickstart your day, while evening sessions can help de-stress."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "An effective workout can be as short as 20 minutes or extend to an hour, depending on your goals and fitness level. Quality and consistency matter more."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, warming up is crucial. It prepares your body, reduces the risk of injury, and enhances the effectiveness of your workout. Spend 5-10 minutes on warm-up exercises."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Both are beneficial. Cardio boosts your heart health, while strength training builds muscle and improves metabolism. A well-rounded routine combines both."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Lifting weights is a fantastic way to build strength and muscle. Incorporate weight training into your routine for a balanced and effective workout."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Susan Ade",
        quote: "This fitness program transformed my life. I'm healthier, happier, and more confident. It's not just a workout; it's a journey to wellness.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Alfonso Lorenzo",
        quote: "I've tried many fitness programs, but this one stands out. The trainers are amazing, and the results are incredible. I'm in the best shape of my life!",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Rotimi Gonzalez",
        quote: "I'm thankful for this fitness community. The support is exceptional, and I've achieved goals I never thought possible. It's more than exercise; it's a lifestyle.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Aisha Bello",
        quote: "I was skeptical at first, but this program exceeded my expectations. It's fun, challenging, and incredibly effective. I feel fantastic and healthier than ever.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Tope Solanke",
        quote: "I've been in the industry for years, and this fitness program impressed me. It's well-rounded, motivating, and achieves real results. Highly recommended for all fitness levels.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'Access to our fitness community', available: true},
            {feature: 'Basic workout programs', available: true},
            {feature: 'Weekly fitness tips via email', available: true},
            {feature: 'Limited nutritional guidance', available: true},
            {feature: '24/7 online support', available: true},
            {feature: 'Personalized workout programs', available: false},
            {feature: 'Weekly live group workouts', available: false},
            {feature: 'Extensive nutritional guidance', available: false},
            {feature: 'Monthly progress assessments', available: false},
            {feature: 'Exclusive member discounts', available: false},
            // {feature: 'Access to our fitness app', available: false},
            // {feature: 'Nutritional recipe library', available: false},
            // {feature: 'Private messaging with trainers', available: false},
            // {feature: 'Priority customer support', available: false},
            // {feature: 'Personal fitness tracker', available: false},
            // {feature: 'VIP event invitations', available: false}

        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'Full access to fitness community', available: true},
            {feature: 'Personalized workout programs', available: true},
            {feature: 'Weekly live group workouts', available: true},
            {feature: 'Extensive nutritional guidance', available: true},
            {feature: 'Monthly progress assessments', available: true},
            {feature: 'Exclusive member discounts', available: true},
            {feature: 'Access to our fitness app', available: true},
            {feature: 'Nutritional recipe library', available: true},
            {feature: 'Private messaging with trainers', available: false},
            {feature: 'Member-only webinars', available: false},
            // {feature: 'Quarterly fitness challenges', available: false},
            // {feature: 'Daily motivational messages', available: false},
            // {feature: 'Priority access to new features', available: false},
            // {feature: 'Personal fitness tracker', available: false},
            // {feature: 'VIP event invitations', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'All Gold package features', available: true},
            {feature: '1-on-1 personal training sessions', available: true},
            {feature: 'Customized meal plans', available: true},
            {feature: 'Unlimited live group workouts', available: true},
            {feature: 'Daily motivational messages', available: true},
            {feature: 'Priority customer support', available: true},
            {feature: 'Access to premium content', available: true},
            {feature: 'VIP event invitations.', available: true},
            {feature: 'Quarterly fitness challenges', available: true},
            {feature: 'Priority access to new features', available: true},
            // {feature: 'Personal fitness tracker', available: true},
            // {feature: 'Advanced goal setting', available: true},
            // {feature: 'Virtual personal trainer', available: true},
            // {feature: 'Exclusive workout gear', available: true},
            // {feature: 'Priority class reservations', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]