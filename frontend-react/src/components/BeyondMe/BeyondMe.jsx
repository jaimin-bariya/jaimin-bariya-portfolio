
    import { ExperienceCard, MyGuidance, MyStory } from "@components/index";


    const BeyondMe = () => {


    const MyMentorList = {
        YouTube: [
            {
                instructor: "Hitesh Choudhary",
                learning: ["react", "python", "git/github"],
            },
            {
                instructor: "Apna College",
                learning: ["beginner C", "Open Source", ""],
            },
            {
                instructor: "Hitesh Choudhary",
                learning: ["react", "python", ""],
            },
            {
                instructor: "Hitesh Choudhary",
                learning: ["react", "git/github"],
            },
        ],

        'harvard Professors (CS50)': [
            {
                instructor: 'David J. Malan',
                learning: ['Computer Science', 'Languages']
            },
            {
                instructor: 'Brian Yu',
                learning: ['AI', 'ML']
            },
        ],

        Udemy: [
            {
                instructor: 'Dr. Angela Yu',
                learning: ['Full Python', 'Full Stack Web Development']
            }
        ],

        Coursera: [
            {
                instructor: "Andrew Ng",
                learning: ['AI/Ml Advanced']
            }
        ]
    }

    return (
        <>


            <div className="flex gap-4 px-8">
            <MyGuidance MyMentorList={MyMentorList}/>
            <MyStory/>
            </div>
        
        </>
    );
    };

    export default BeyondMe;