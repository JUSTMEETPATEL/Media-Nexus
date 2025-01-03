// interface Specialization {
//     title: string;
//     description?: string;
//     benefits: {
//       title: string;
//       details: string[];
//     }[];
//   }
  
  const specializations = {
    shortFilm: {
      title: "Short Film Making",
      description: "The Certificate Course in Short Film Making is your gateway to mastering the art of storytelling and stepping into a rewarding career in the creative industry.",
      benefits: [
        {
          title: "Hands-On Filmmaking Experience",
          details: ["From scripting to post-production, gain practical experience at every stage of the filmmaking process, culminating in the creation of your very own short film."]
        },
        {
          title: "Storytelling Mastery",
          details: [
            "Write impactful scripts tailored for short films",
            "Create engaging characters with depth and relatability",
            "Use visual storytelling techniques to evoke emotion and captivate your audience"
          ]
        },
        {
          title: "Industry-Relevant Skills",
          details: [
            "Cinematography: Understand lighting, camera angles, and shot composition",
            "Directing: Lead actors and crew to bring your vision to life",
            "Editing: Use industry-standard software to assemble, refine, and enhance your film",
            "Sound Design: Create immersive audio experiences with clean dialogue, ambient sounds, and effects"
          ]
        },
        {
          title: "Versatility Across Industries",
          details: [
            "Education: Develop instructional videos and creative learning content",
            "Corporate: Create impactful promotional or training videos",
            "Non-Profit: Produce documentaries or awareness campaigns"
          ]
        }
      ]
    },
    videoEditing: {
      title: "Video Editing",
      benefits: [
        {
          title: "Essential for Storytelling",
          details: ["Video editing is the heart of storytelling, transforming raw footage into engaging narratives that captivate audiences."]
        },
        {
          title: "High Demand Across Industries",
          details: ["From films and social media to advertising and corporate videos, video editors are in demand across diverse sectors."]
        },
        {
          title: "Versatile Career Opportunities",
          details: ["Mastering video editing opens doors to roles like film editor, content creator, motion graphics designer, and more."]
        },
        {
          title: "Creative and Technological Mastery",
          details: ["Learn to combine artistic vision with technical skills using tools like Adobe Premiere Pro and DaVinci Resolve to create professional-quality edits."]
        },
        {
          title: "Endless Career Growth",
          details: ["With the surge in video content across OTT platforms, e-learning, and digital media, video editing offers a dynamic and rewarding career path."]
        }
      ]
    },
    digitalPhotography: {
      title: "Digital Photography",
      benefits: [
        {
          title: "Master the Art of Visual Storytelling",
          details: ["Digital photography empowers you to capture moments and tell compelling stories through powerful imagery."]
        },
        {
          title: "High Demand Across Industries",
          details: ["Photographers are sought after in industries like advertising, media, fashion, e-commerce, real estate, and more."]
        },
        {
          title: "Diverse Career Opportunities",
          details: ["Specializing in photography opens up roles such as portrait photographer, product photographer, photojournalist, and wildlife photographer."]
        },
        {
          title: "Creative and Technical Expertise",
          details: ["Learn to use advanced cameras, lighting techniques, and post-processing tools like Adobe Lightroom and Photoshop to produce stunning visuals."]
        },
        {
          title: "Expand Your Career Horizons",
          details: ["With the rise of social media, digital marketing, and visual storytelling, digital photography offers exciting and rewarding career opportunities worldwide."]
        }
      ]
    },
    socialMediaDesign: {
      title: "Social Media Design",
      benefits: [
        {
          title: "Drive Engagement Through Visual Storytelling",
          details: ["Social media design enables you to craft visually striking content that captivates audiences and drives interaction."]
        },
        {
          title: "High Demand Across Industries",
          details: ["Brands, businesses, and influencers rely on skilled designers to create impactful posts, stories, ads, and banners for platforms like Instagram, Facebook, and TikTok."]
        },
        {
          title: "Diverse Career Opportunities",
          details: ["Specializing in social media design opens doors to roles such as content designer, digital marketer, social media strategist, and creative consultant."]
        },
        {
          title: "Master Design Tools and Trends",
          details: ["Gain expertise in tools like Canva, Adobe Photoshop, and Illustrator while staying ahead with evolving trends like motion graphics and AI-powered design."]
        },
        {
          title: "Be at the Heart of Digital Marketing",
          details: ["Social media design is crucial for branding, customer engagement, and online visibility, making it a rewarding and ever-growing career field."]
        }
      ]
    },
    threeDAnimation: {
      title: "3D Animation",
      benefits: [
        {
          title: "Master the Art of Storytelling Through Animation",
          details: ["3D animation brings characters and worlds to life, enabling you to tell immersive stories and captivate audiences."]
        },
        {
          title: "High Demand Across Industries",
          details: ["3D animators are essential in industries like gaming, films, OTT platforms, advertising, AR/VR, and e-learning."]
        },
        {
          title: "Diverse Career Opportunities",
          details: ["Specializing in 3D animation opens doors to roles like character animator, VFX artist, 3D modeler, and game designer."]
        },
        {
          title: "Expertise in Advanced Tools and Techniques",
          details: ["Learn the full animation pipeline, including modeling, texturing, rigging, and rendering, using industry-standard software like Maya, Blender, and Unreal Engine."]
        },
        {
          title: "Unlock Creative and Technological Potential",
          details: ["3D animation combines artistic vision with cutting-edge technology, offering a dynamic and innovative career path."]
        }
      ]
    }
  } as const;
  
  export default specializations;