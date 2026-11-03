// Centralized customizable data for your romantic digital love story.
// Simply edit any text, dates, images, or gifts below to personalize!

export const storyData = {
  // Personal Metadata
  recipientName: "My Love",
  senderName: "Yours Forever",
  occasion: "Anniversary", // "Anniversary" or "Birthday" or "Special Day"
  
  // Date when your story started (YYYY-MM-DDTHH:mm:ss format)
  // Used in Section 5 (Our Time Together counter)
  dateMet: "2023-08-16T00:00:00", 
  dateMetFormatted: "August 16, 2023",

  // Section 1: Landing Question
  landing: {
    question: "Before we begin… are you ready to relive our story? ❤️",
    yesButtonText: "YES ❤️",
    noButtonText: "NO 🙈",
    noPlayfulMessages: [
      "Are you sure? 🥺",
      "Think again… ❤️",
      "You can't escape this story 👀",
      "Nice try! Still YES ❤️",
      "I know you want to click YES ✨",
      "Resistance is futile! 😘"
    ]
  },

  // Section 2: Special Wish
  wish: {
    heading: "Happy Birthday to my favorite person. ❤️",
    paragraphs: [
      { text: "I could have simply wished you with a message...", highlight: false },
      { text: "but you deserve more than just a “Happy Birthday.” ❤️", highlight: true },
      { text: "So I made you a little journey through us —\nour memories, our moments, our laughs,\nand all the little things that make you so special to me.", highlight: false },
      { text: "Happy Birthday, my love. 🎂❤️", highlight: true },
      { text: "I hope this year brings you everything your heart wishes for.\nAnd I hope I get to be there beside you for all of it. 🫶✨", highlight: false }
    ],
    continueButtonText: "Continue →"
  },

  // Section 3: Choose Your Gift (4 interactive gift boxes)
  gifts: [
    {
      id: 1,
      teaser: "Something you'll keep",
      badge: "A Little Sound of Love 🎧",
      icon: "Headphones",
      title: "🎧 A Little Sound of Love",
      message: "Something to keep forever with you. For all our late-night calls, your favorite songs, and every beat in between. Whenever you wear these, remember that my heart and my love are always with you. ❤️🎧",
      giftType: "headphones",
      isProduct: true,
      image: "/headphones.png"
    },
    {
      id: 2,
      teaser: "Something you'll remember",
      badge: "Made With My Kisses 💋",
      icon: "Shirt",
      title: "💋 Made With My Kisses, Just For You ❤️",
      message: "You've been asking me for a kisses T-shirt for so long, and finally, here it is! This time, not just a regular T-shirt, but one filled with my kisses and all my love. Since I can't be beside you every moment to kiss you, let these little kisses remind you that you're always loved by me. Wear it, feel my love, and imagine every kiss is from me. Mwahhh! 😘❤️",
      giftType: "shirt",
      isProduct: true,
      image: "/kissed-shirt.png"
    },
    {
      id: 3,
      teaser: "Something from my heart",
      badge: "Picked Just for You 🤍",
      icon: "HeartHandshake",
      title: "🤍 Picked Just for You",
      message: "Yes, I know you have enough green shirts already! 😂 But this one caught my eye, and I couldn't resist choosing it for you. Maybe you didn't like it at first, but I hope you'll love it a little more because it's chosen by me, especially for you. ❤️",
      giftType: "heart",
      image: "/picked-for-you.jpg"
    }
  ],

  // Section 4: Our Love Journey (9 timeline milestones)
  milestones: [
    {
      id: "m1",
      date: "October 14, 2021",
      title: "The Day We Met",
      description: "A chance encounter that changed everything. One shared smile, and the universe quietly rewrote our futures.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
      tag: "Beginning"
    },
    {
      id: "m2",
      date: "November 02, 2021",
      title: "First Conversation",
      description: "Hours vanished like minutes. Text messages turned into late-night calls where we lost track of time entirely.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      tag: "Spark"
    },
    {
      id: "m3",
      date: "December 25, 2021",
      title: "First Special Memory",
      description: "Our first holiday together. Soft lights, warm tea, laughter, and the cozy feeling of finally belonging.",
      image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=800&q=80",
      tag: "Magic"
    },
    {
      id: "m4",
      date: "May 18, 2022",
      title: "Favorite Moments",
      description: "Dancing in the kitchen at midnight, spontaneous road trips, inside jokes, and silly nicknames only we understand.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
      tag: "Joy"
    },
    {
      id: "m5",
      date: "August 10, 2022",
      title: "Fights & Understanding",
      description: "We realized love isn't just sunshine. Learning to listen, apologize, and come out stronger together made us unbreakable.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
      tag: "Growth"
    },
    {
      id: "m6",
      date: "January 15, 2023",
      title: "Distance",
      description: "Miles apart, but closer than ever. Late night FaceTime dates and counting down days until we met again.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      tag: "Strength"
    },
    {
      id: "m7",
      date: "November 08, 2023",
      title: "Getting Through Difficult Times",
      description: "Life threw storms our way, but holding your hand made every challenge feel surmountable. We chose each other every day.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
      tag: "Resilience"
    },
    {
      id: "m8",
      date: "Today",
      title: "Today & Every Present Moment",
      description: "Standing right here, celebrating everything we've built, thankful for every second we share in this beautiful journey.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      tag: "Now"
    },
    {
      id: "m9",
      date: "Infinity",
      title: "Forever ♾️",
      description: "No matter where the future takes us, my heart belongs with yours. To all the unwritten pages waiting for us.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      tag: "Always"
    }
  ],

  // Section 5: Our Time Together ⏳
  timeCounter: {
    heading: "Our Time Together ⏳",
    subtext: "From the day we met… to infinity. ♾️"
  },

  // Section 6: Memories 📸 (Photo gallery timeline)
  memories: [
    {
      id: "mem1",
      date: "October 14, 2021",
      title: "The Beginning",
      description: "We didn't know it that day, but this was the beginning of one of the most beautiful chapters of my life.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
      category: "Milestone"
    },
    {
      id: "mem2",
      date: "February 14, 2022",
      title: "First Valentine's Sunset",
      description: "Watching the sun dip beneath the horizon, feeling your shoulder against mine as the sky bloomed in pink and gold.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      category: "Romantic"
    },
    {
      id: "mem3",
      date: "July 22, 2022",
      title: "The Rain Stroll",
      description: "Getting caught in unexpected summer rain without an umbrella, laughing uncontrollably while running for shelter.",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80",
      category: "Laughter"
    },
    {
      id: "mem4",
      date: "December 31, 2022",
      title: "Midnight New Year Kiss",
      description: "As the fireworks erupted and everyone cheered, the world froze and all I saw was you.",
      image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=800&q=80",
      category: "Celebration"
    },
    {
      id: "mem5",
      date: "June 12, 2023",
      title: "Coffee & Quiet Sundays",
      description: "My favorite kind of luxury: waking up slow, making warm brew, and reading together in total peaceful comfort.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      category: "Cozy"
    },
    {
      id: "mem6",
      date: "August 30, 2023",
      title: "The Mountain Road Trip",
      description: "Winding roads, high peaks, playing our favorite songs loud, and feeling like the entire world was ours.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      category: "Adventure"
    }
  ],

  // Section 7: The Real Story ❤️🩹
  storyCards: {
    heading: "The Real Story ❤️🩹",
    subheading: "A relationship isn't a fairy tale—it's two people constantly choosing each other.",
    cards: [
      {
        id: "love",
        icon: "Heart",
        title: "Love ❤️",
        badge: "Our Foundation",
        colorTheme: "rose",
        description: "Our story is filled with soft giggles, surprise morning texts, bear hugs that make everything okay, and a deep comfort that only comes when you meet your soul's matching piece."
      },
      {
        id: "fights",
        icon: "ShieldAlert",
        title: "Fights 🥺",
        badge: "Real & Honest",
        colorTheme: "amber",
        description: "We're not perfect, and we don't pretend to be. We've had misunderstandings, sharp words, and tough conversations. But through every storm, we never fought to win—we fought to understand."
      },
      {
        id: "distance",
        icon: "Globe",
        title: "Distance 🌍",
        badge: "Tested & True",
        colorTheme: "blue",
        description: "Whether separated by miles, busy workdays, or crowded rooms, missing you always reminded me how deeply rooted you are in my heart. Distance only proved that love knows no geography."
      },
      {
        id: "togetherness",
        icon: "Sparkles",
        title: "Togetherness ❤️🩹",
        badge: "Always & Forever",
        colorTheme: "emerald",
        description: "After every doubt, every struggle, and every long day, we kept coming back to one simple truth: life is infinitely sweeter with you by my side. We keep choosing each other."
      }
    ]
  },

  // Section 8: Hidden Surprise 👀
  finalSurprise: {
    initialText: "Okay… that's everything.",
    teaserText: "Wait… one more thing 👀",
    revealButtonText: "Reveal My Final Surprise ❤️",
    modalTitle: "A Special Surprise Just For You ✨",
    modalSubtitle: "Choose how you want to experience this moment:",
    tabs: [
      {
        id: "letter",
        label: "A Letter From My Heart 💌",
        type: "letter",
        content: {
          title: "💌 A Letter From My Heart",
          salutation: "To my favourite person, my love, my birthday boy! 🎂❤️",
          body: `Happy Birthday, baby! 🥹💗

If I could give you one gift today, I'd let you see yourself through my eyes, just so you'd understand how special you truly are to me. ❤️

One of the things I admire most about you is how responsible you are, how hard you work, and how much you care for your family. I know you carry so many responsibilities on your shoulders, and I hope you know how proud I am of you. You have such a beautiful heart, baby, and you deserve so many beautiful things in this life. 🫂❤️

On your birthday, my biggest wish is that life gives you everything you've ever dreamed of. I hope all your hard work brings you success, all your sacrifices turn into happiness, and all those little dreams you keep in your heart become reality someday. I hope you get to experience the comfort, peace, happiness, and beautiful life you've always wanted. You deserve to enjoy life, too, not just work hard for everyone else. 🥹💗

I hope one day you look around at your life, smile to yourself, and feel proud of how far you've come. I hope you never have to give up on something you want because of circumstances. I wish you opportunities, financial stability, success, good health, and more happiness than you can imagine. And whenever you achieve something you've been dreaming of, I hope you remember that I'll always be cheering for you. ❤️✨

Baby, thank you for coming into my life and becoming such a special part of it. I don't know what the future holds for us, but I hope it brings us countless memories, beautiful experiences, and many more birthdays to celebrate together. ♾️💕

And if there's one thing I want you to remember, it's this:

You don't always have to be the strong one. You deserve to be taken care of, to be loved gently, to rest without worrying, and to have someone who celebrates your happiness just as much as you celebrate everyone else's.

I hope life is kind to you, my love. I hope your heart stays happy, your dreams keep growing, and you get to have all the things you've worked so hard for.

Happy Birthday, my precious boy! 🎂❤️

I'm so proud of the person you are, so excited for the person you're becoming, and so grateful that I get to love you.

May this year bring you closer to every dream you've ever held in your heart. And may you always have reasons to smile, today and in all the years to come. 🫶🏻

I love you so much, baby. You deserve the world, and I hope life gives you the chance to experience all the beautiful things it has to offer. ❤️🌎`,
          signature: "Forever your girl. 💌♾️"
        }
      },
      {
        id: "ticket",
        label: "A Little Promise for Us 🎟️",
        type: "ticket",
        content: {
          badge: "Forever Promise",
          title: "A Little Promise for Us ❤️",
          validUntil: "Valid Forever & In Every Lifetime ♾️",
          promises: [
            {
              icon: "❤️",
              title: "1. I'll Never Leave You",
              text: "I'll stay by your side through life's ups and downs. No matter what comes our way, I'll always do my best for us. ❤️🫂"
            },
            {
              icon: "♾️",
              title: "2. I'll Keep Choosing You",
              text: "Every day, every chapter, every lifetime—my heart will keep choosing you. ❤️"
            },
            {
              icon: "🫂",
              title: "3. When the World Feels Heavy",
              text: "You don't always have to be strong, baby. When you're tired, let me be your comfort, too. ❤️🩹"
            },
            {
              icon: "🏡",
              title: "4. A Future With You",
              text: "I dream of a simple, happy life with you, filled with little moments, endless laughter, and a love that grows every day. 🏡❤️"
            },
            {
              icon: "🌟",
              title: "5. I'll Always Believe in You",
              text: "I hope you achieve every dream you've ever had. I'll always be proud of you and cheering for you, my love. 🥹💗"
            },
            {
              icon: "💌",
              title: "6. You Have My Heart",
              text: "I want to keep making memories with you, loving you, and growing with you. You're my today and the future I dream of. ❤️♾️"
            }
          ]
        }
      }
    ]
  },

  // Chapter 8: Final Wish 💌
  finalWish: {
    mainQuote: "If I could choose one person to experience all of this life with again… I'd still choose you.",
    gratitudeHeading: "Thank You, My Love ❤️",
    gratitudePoints: [
      "Thank you for every beautiful memory we've created together.",
      "Thank you for every late-night call that made me forget how far apart we were.",
      "Thank you for making a screen feel like the safest place in the world.",
      "Thank you for every good morning and good night that made me feel like a part of your everyday life.",
      "Thank you for being my favourite notification, my favourite voice, and my favourite person.",
      "Thank you for being such a beautiful part of my life, someone I'll always be grateful for."
    ],
    specialNote: {
      lead: "And most importantly…",
      highlight: "Thank you for being YOU.",
      detail: "For being the person you are, for loving me the way you do, and for making my world a little more beautiful just by being in it."
    },
    finalPhoto: "/final-photo.png",
    finalPhotoCaption: "Us, always & forever. ❤️",
    closingWish: "Once again, Happy Birthday! 🎂❤️",
    closingWishSub: "To my favorite person in the world, today and for all the years to come. ♾️✨",
    replayButtonText: "Replay Our Story ❤️"
  }
};
