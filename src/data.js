import reelsVideo from './assets/VideoWowAllCity14Reels.mp4'
import reelsVideo2 from './assets/VideoLycan.mp4'
import reelsVideo3 from './assets/VideoLoxusCuciSepatu.mp4'
import reelsVideo4 from './assets/videoRigorerAR3.mp4'
import ytVideo from './assets/VideoTeaserBukel.mp4'
import ytVideo2 from './assets/VideoTeaserPDS.mp4'
import ytVideo3 from './assets/VideoTrailer.mp4'
import ytVideo4 from './assets/Video5PMTeaser.mp4'
import wplogo from './assets/wplogo.webp'
import iconFlutter from './assets/flutterlogo.webp'  
import iconFigma from './assets/figmalogo.png'
import iconReact from './assets/react.svg'
import iconFinalCutPro from './assets/finalcutprologo.png'
import iconCapcut from './assets/capcutlogo.png'
import iconTypeScript from './assets/typescriptlogo.webp'
import iconDavinciResolve from './assets/davinciresolvelogo.png'
import webImg1 from './assets/pdsweb.png'
import webImg2 from './assets/client1web.png'
import webImg3 from './assets/employeedashboard.png'
import webImg4 from './assets/baristaquizmockup.jpg'
import webImg5 from './assets/katanyataweb.png'



export const reels = [
    {
        reelstitle: "Sepatu Lining All City 14 Reels",
        reelsVideo: reelsVideo,
    },
    {
        reelstitle: "Lycan Running Shoes Reels",
        reelsVideo: reelsVideo2,
    },
    {
        reelstitle: "Loxus Shoe Cleaning Service Reels",
        reelsVideo: reelsVideo3,
    },
    {
        reelstitle: "Rigorer AR 3 Northern Lights Reels",
        reelsVideo: reelsVideo4,
    }
]

export const youtube = [
    {
        yttitle: "Kata Nyata Bulan Keluarga Teaser",
        ytsrc: ytVideo,
    },

    {
        yttitle: "PDS Teaser",
        ytsrc: ytVideo2,
    },
    {
        yttitle: "Way of Wade All City 14 Review by Naksir Sneakers",
        ytsrc: 'https://youtu.be/ssBBOsL_quY?si=KmYbf25e_2UuVlng',
    },
    {
        yttitle: "2023 GKI Peterongan Christmas Trailer",
        ytsrc: ytVideo3,
    },
    {
        yttitle: "Sepatu buat abisin THR by Naksir Sneakers",
        ytsrc: 'https://youtu.be/1wkAZflBi9w?si=1l7VMtm9ky2fQb24',
    },
    {
        yttitle: "Teaser 5PM GKI Peterongan",
        ytsrc: ytVideo4
    },
    {
        yttitle: "Adidas Virginia Flat Earther Review by Naksir Sneakers",
        ytsrc: 'https://youtu.be/k5cqqQq9q_0?si=ZTis0-XD8-2b2NJ5',
    },

    
]

export const tools = [
    {
        img: iconFlutter,
        title: "Flutter"
    },
    {
        img: iconReact,
        title: "React"
    },
    {
        img: iconDavinciResolve,
        title: "Davinci Resolve"
    },

    {
        img: iconFigma,
        title: "Figma"
    },
    {
        img: iconFinalCutPro,
        title: "Final Cut Pro"
    },
    {
        img: iconCapcut,
        title: "Capcut"
    },

]

export const webUI = [
    {
        websitename: "Pekan Doa Sedunia",
        websiteImg: webImg1,
        websiteLink: "https://pds.gkipts.id/",
        websiteDescription: "This website purpose is to help people acknowledge what the event is about, its true purpose, and what the event is for. ",
        websiteCreation: "Eversince this website is to educate people about the event is, and it also shared the liturgy and the documentation of event, and the lack of time that makes this website needs to be finished immediately, I am using wordpress to implement the website design, but the process of designing is still using figma to make sure the website is aesthetic and user-friendly.",
        websiteTools: [wplogo, iconFigma]
    },
    {
        websitename: "Catalogue Project",
        websiteImg: webImg2,
        websiteLink: "https://www.figma.com/proto/AV9GRuoipxw2p6troEF9Mn/Protoype-of-UI-Client-by-Joseph?node-id=0-1&t=Jmc9VwGbBWOohAvb-1",
        websiteDescription: "This website purpose is used as a catalogue of my client's works, and this is just the prototype",
        websiteCreation: "I am using Figma to design the layout and user experience of the website, with the reference based on what the client has informed, with a bit of modification that adjusted with the user experience",
        websiteTools: [iconFigma]
    },
    {
        websitename: "Employee Dashboard",
        websiteImg: webImg3,
        websiteLink: "https://employeedashboard-seven.vercel.app",
        websiteDescription: "This website purpose is to help employees to keep track of their work",
        websiteCreation: "I am designing this interface with optimization of AI, and then implement it using React Javascript Framework that use TypeScript Language.",
        websiteTools: [iconReact, iconTypeScript]
    },
    {
        websitename: "Barista Quiz",
        websiteImg: webImg4,
        websiteLink: "https://baristaquiz.vercel.app/",
        websiteDescription: "This website that is based on application called Barista quiz, this quiz is used to test the knowledge of barista about coffee",
        websiteCreation: "I am using Flutter to design the layout and user experience of the website,  with a bit of modification that adjusted with the user experience",
        websiteTools: [iconFlutter]
    },
    {
        websitename: "Kata Nyata Website",
        websiteImg: webImg5,
        websiteLink: "https://katanyata.gkipts.id",
        websiteDescription: "This website is created to help user acknowledge about what is the meaning of Kata Jadi Nyata, and what's the event it self",
        websiteCreation: "I am using React JS Framework to implement the website design and user experience.",
        websiteTools: [iconReact]
    }

]