
    import { ExperienceCard, MyGuidance, MyStory, Persona } from "@components/index";


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


    const personaList = [
        'A',
        "B",
        "dfghj",
        "dfghj",
        "dfghj",
        "df",
        "df32e",
        "dffew",
    ]

    return (
        <>


            <div className="flex gap-4 px-8">
            <MyGuidance MyMentorList={MyMentorList}/>
            <MyStory/>
            <Persona personaList={personaList}/>
            </div>
        
        </>
    );
    };

    export default BeyondMe;