"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"
import BlogModal from "./blog-modal"

export default function BlogsSection() {
  const blogs = [
    {
      id: "vsync-heartfelt-connections",
      title: "V-SYNC: Humming Your Way to Heartfelt Connections",
      excerpt: "Discover how our innovative V-SYNC technology helps strengthen relationships through wellness.",
      date: "December 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
      content: `In a world where time is a precious currency, the pursuit of genuine connections often feels like a challenging expedition through the chaos of our daily lives. Whether it's friendships or romantic relationships, the essence lies in sharing similar vibes. The real question is: in this fast-paced, bustling world, how do we uncover those rare souls who resonate with our unique frequency?

**Unlocking the Power of Humming: V-SYNC's Unique Approach**

Enter V-SYNC, the modern-day cupid armed with the sweet harmony of humming. Searching for like-minded individuals has never been this easy, thanks to this revolutionary voice-based technology. Say goodbye to the tiresome task of sifting through countless profiles and endless small talk. V-SYNC steps in as the ultimate vibe checker, using the universal language of humming to summarize the percentage of vibes you share with someone in no time.

Imagine a world where your search for meaningful connections is transformed into a melodious journey. V-SYNC doesn't just find your matches; it orchestrates symphonies of compatibility. No more exhausting small talk or mismatched encounters – just the sweet hum of understanding.

**Unlocking the Power of Humming: V-SYNC's Unique Approach**

V-SYNC embraces the simplicity of humming, turning it into a powerful tool for deciphering the intricate language of vibes. Forget about filling out lengthy questionnaires or swiping endlessly through profiles. With V-SYNC, all it takes is a hum – a natural expression of your inner rhythm.

This voice-based technology acts as a mediator, translating the vibrations between two people into a percentage that reflects the harmony of their connection. It's not about algorithms and complex formulas; it's about the authentic, instinctive connection that hums create. V-SYNC lets you tap into the essence of human communication – the unspoken language that binds us together.

**A Vibe-Checked Universe: Making Connections Effortless**

V-SYNC doesn't just stop at finding your matches; it transforms the entire landscape of your social interactions. Picture a world where you can effortlessly connect with people who share your wavelength. With V-SYNC, every interaction becomes an opportunity to explore new connections without the hassle.

Say goodbye to the overwhelming nature of modern dating or friendship-building. V-SYNC simplifies the process, ensuring that every encounter is filled with the potential for genuine connection. It's time to let the hums guide you, unlocking a universe of harmonious relationships waiting to be discovered.

In a world that never stops buzzing, V-SYNC stands out as the antidote – a melody of connection that cuts through the noise. Let the humming begin, and let V-SYNC be your companion on the journey to heartfelt, resonant connections.`,
    },
    {
      id: "novicule-ta-cold-cough",
      title: "\"NO\" bullet for Common Cold and Cough !",
      excerpt: "Revolutionary remedy to combat productivity thieves - common cold and cough.",
      date: "December 12, 2024",
      image: "/placeholder.svg?height=200&width=300",
      content: `Are you tired of the relentless grip of a viral cold or cough derailing your productivity for an entire week? It's a common woe among working professionals, causing not just physical discomfort but also a significant loss of money for employers. Antibiotics often fall short in providing quick relief, leaving many searching for a breakthrough solution. Enter Novicule TA – a revolutionary remedy poised to transform the way we combat these perennial productivity thieves.

**The Perils of Lost Productivity**

Picture this: You wake up with a scratchy throat and a sniffle, signaling the onset of the notorious common cold. As the symptoms intensify, so does the dread of being sidelined for an entire week. The working world knows all too well the toll this takes on both personal well-being and professional commitments. Meetings missed, deadlines extended, and the inevitable backlog – it's a domino effect that affects not just individuals but entire teams and businesses.

**Breaking the Chains: Novicule TA**

Novicule TA is not just another over-the-counter remedy; it's a game-changer in the battle against common cold and cough. Developed as a unique solution, Novicule TA promises to improve your condition within 2-3 days, paving the way for a swift return to optimal health. No more languishing in the clutches of prolonged illness – Novicule TA is here to put you back in the driver's seat of your life and career.

**A Boost for Employers**

Employers, too, stand to benefit from the introduction of Novicule TA in their workplace. Reduced sick leave, enhanced employee productivity, and a healthier workforce – these are the promises that Novicule TA brings to the table. Investing in employee well-being is not just a gesture of goodwill; it's a strategic move that can positively impact the bottom line.

**Join the Novicule TA Revolution**

Say goodbye to the days of being sidelined by a common cold or cough. Embrace the Novicule TA revolution and experience a paradigm shift in how you handle illness. It's not just a remedy; it's a catalyst for change in the way we approach health and productivity.

In conclusion, Novicule TA isn't just a cold and cough solution; it's a beacon of hope for a more efficient, healthier, and productive professional life. Don't let a viral invasion dictate your schedule – reclaim control with Novicule TA, the key to swift recovery and unstoppable productivity.`,
    },
    {
      id: "novicule-ta-stress-free",
      title: "Novicule-TA: Ticket to your stress-free exams and work",
      excerpt: "Your trusty stress-buster for tackling exam worries and work-related tension.",
      date: "December 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
      content: `In the whirlwind of exams and work pressures, stress often takes center stage, casting a shadow over success. But fear not, as a game-changer has emerged to tackle this stress head-on. Enter Novicule-TA, your trusty stress-buster, here to sweep away exam worries and work-related tension so you can focus on what matters most – your studies and your career.

**The Exam Juggle: Novicule-TA Has Your Back**

College exams, competitive hurdles like JEE, NEET, UPSC, SSC, or PCS – it's a rollercoaster of stress. Novicule-TA steps in as your reliable ally, promising to tackle stress while you dive into your studies. Think of it as a stress guardian, allowing you to concentrate on acing those exams without the weight of anxiety pulling you down.

**Bye-Bye Work Woes: Novicule-TA Takes Charge**

But it doesn't stop there. Novicule-TA extends its stress-busting prowess to the workplace. The never-ending tasks, deadlines, and office dynamics – it's enough to make anyone's stress levels skyrocket. Fear not, as Novicule-TA is here to ease the strain. Picture it as your stress superhero, swooping in to rescue you from work-related worries, leaving you free to excel in your professional pursuits.

**The Novicule-TA Experience: Nutraceutical Bliss**

Now, you might wonder, what's the secret behind Novicule-TA's magic? It's all about nutraceutical bliss – a fusion of natural goodness carefully crafted to help you sail through stress and anxiety. No complicated scientific jargon here; just imagine it as your daily dose of calm and focus, neatly packaged to support your well-being.

**How Novicule-TA Works its Charm**

Novicule-TA employs a simple yet effective approach. Through its unique blend of stress-busting elements, it helps to create a serene mental space. Say goodbye to exam-induced tension and workplace worries – Novicule-TA is your ticket to a stress-free zone. Think of it as a breath of fresh air in the midst of chaos, allowing you to navigate exams and office challenges with ease.

**A Stress-Free Future Awaits: Embrace Novicule-TA**

As you stand at the crossroads of exams and work responsibilities, let Novicule-TA be your guiding light. Bid farewell to stress, and welcome a future where success and well-being go hand in hand. With Novicule-TA, the stress is taken care of – leaving you free to conquer exams and soar in your professional journey. Your stress-free ticket to success has arrived – embrace Novicule-TA and let the success story unfold!`,
    },
    {
      id: "antimicrobial-resistance-threat",
      title: "The Silent Threat: Unveiling the Menace of Antimicrobial Resistance",
      excerpt: "Understanding the growing challenge of antimicrobial resistance and innovative solutions.",
      date: "December 8, 2024",
      image: "/placeholder.svg?height=200&width=300",
      content: `In an era where medical advancements have revolutionized the way we combat diseases, there looms a silent threat that jeopardizes our progress: antimicrobial resistance (AMR). Though often overlooked, AMR poses a grave concern for the general public, threatening to render our arsenal of antibiotics ineffective against even the most common infections.

At its core, antimicrobial resistance refers to the ability of microorganisms-such as bacteria, viruses, fungi, and parasites-to withstand the effects of medications designed to kill or inhibit their growth. This resilience is not merely a hypothetical scenario; it is a stark reality unfolding before our eyes, fueled by overuse and misuse of antibiotics in both human and animal healthcare, as well as in agriculture.

**Why Should the Public Be Concerned?**

But why should the general public be concerned about a phenomenon that seems confined to the realms of hospitals and laboratories? The implications of AMR extend far beyond clinical settings, reaching into our everyday lives in profound ways.

Imagine a world where a simple cut or urinary tract infection could spiral into a life-threatening ordeal because the antibiotics once relied upon to treat such ailments are no longer effective. This is not a dystopian fantasy but a plausible future if we fail to address the growing threat of AMR.

Moreover, AMR has the potential to unravel decades of progress in medical care, rendering procedures such as organ transplants, chemotherapy, and surgeries increasingly risky. Routine surgeries could become fraught with peril, as the risk of post-operative infections skyrockets without effective antibiotics to mitigate them.

**Economic and Agricultural Impact**

Economically speaking, the toll of antimicrobial resistance is staggering. The costs associated with prolonged illnesses, increased hospital stays, and the development of new drugs to combat resistant strains strain healthcare systems and individual budgets alike. Furthermore, the agricultural sector faces losses as antibiotic-resistant pathogens spread among livestock and crops, diminishing yields and jeopardizing food security.

**A Multifaceted Solution**

Addressing antimicrobial resistance demands a multifaceted approach that involves collaboration across sectors and disciplines. Healthcare professionals must exercise judicious prescribing practices, opting for antibiotics only when absolutely necessary and adhering to proper dosage regimens. Patients, in turn, must resist the temptation to demand antibiotics for viral infections or use leftover medications indiscriminately.

In the agricultural realm, stricter regulations on antibiotic use in livestock and crops are imperative to curb the proliferation of resistant strains. Additionally, investment in alternative methods of disease prevention and treatment, such as vaccines and bacteriophage therapy, offers promising avenues for mitigating the spread of AMR.

Public awareness and education play a pivotal role in combating antimicrobial resistance. Empowering individuals with knowledge about the prudent use of antibiotics, the importance of completing prescribed courses, and the potential consequences of AMR fosters a sense of collective responsibility in safeguarding public health.

In conclusion, antimicrobial resistance is not a distant threat confined to the confines of laboratories; it is a pressing concern that demands immediate attention from policymakers, healthcare professionals, and the general public alike. Failure to address this menace threatens to unravel the fabric of modern medicine, jeopardizing lives, livelihoods, and the very foundation of our healthcare systems. Only through concerted action can we hope to preserve the efficacy of antibiotics and safeguard the health of future generations.`,
    },
    {
      id: "relationship-wellness-guide",
      title: "Nurturing Bonds: The Essential Guide to Relationship Wellness",
      excerpt: "A comprehensive guide to maintaining healthy relationships through wellness practices.",
      date: "December 5, 2024",
      image: "/placeholder.svg?height=200&width=300",
      content: `In a world bustling with distractions, maintaining healthy relationships can feel like navigating a labyrinth. Yet, amidst the chaos, lies the profound importance of nurturing bonds that uplift and sustain us. Welcome to the ultimate guide on Relationship Wellness – your compass to thriving connections in an ever-evolving landscape.

**Unveiling the Foundation: Communication**

At the heart of every flourishing relationship beats the rhythm of communication. It's not just about words; it's about truly listening, understanding, and empathizing. Dive deep into meaningful conversations, where vulnerability and honesty pave the way for intimacy. Remember, effective communication isn't a monologue but a dialogue where both partners feel heard and valued.

**Cultivating Connection: Quality Time**

In the hustle of modern life, quality time often takes a backseat. Yet, carving out moments to cherish each other's company is vital for relationship wellness. Whether it's a cozy dinner at home, a leisurely stroll hand in hand, or a spontaneous adventure, prioritize shared experiences that nourish your bond. It's the simple moments that weave the tapestry of lasting memories.

**Navigating Challenges: Conflict Resolution**

Every relationship encounters rough waters, but it's how you navigate through them that defines its strength. Embrace conflict as an opportunity for growth, not a battleground for winning. Practice active listening, express your feelings constructively, and seek compromise rather than dominance. Remember, it's not about being right; it's about understanding and supporting each other through thick and thin.

**Embracing Individuality: Space and Independence**

While togetherness is vital, so is honoring each other's individuality. Foster a space where both partners can pursue their passions, nurture personal growth, and recharge independently. Healthy relationships thrive on interdependence, where two individuals complement each other without losing sight of their autonomy. Celebrate each other's uniqueness and encourage personal fulfillment.

**Cultivating Trust: The Bedrock of Intimacy**

Trust is the cornerstone of any meaningful relationship, built brick by brick through consistency, honesty, and reliability. Nurture a safe space where both partners feel secure to be their authentic selves without fear of judgment or betrayal. Trust is fragile; handle it with care, and let your actions speak louder than words.

**The Power of Gratitude: Appreciation and Affection**

In the hustle of daily life, it's easy to overlook the little things that make your relationship special. Cultivate a culture of gratitude, where expressions of appreciation and affection flow freely. From a heartfelt thank you to a spontaneous hug, these small gestures fortify the foundation of your bond and remind you of the beauty in everyday moments.

**Conclusion: Cultivating Lasting Connections**

Relationship wellness isn't a destination but a journey of continual growth, exploration, and nurturing. It requires dedication, patience, and above all, a deep commitment to each other's happiness and well-being. So, embark on this journey hand in hand, embracing the highs and lows, knowing that true fulfillment lies in the beauty of shared experiences and the strength of your connection. Here's to love, laughter, and a lifetime of thriving relationships.`,
    },
    {
      id: "vsync-vibrant-verve",
      title: "V-SYNC and the Vibrant Verve of Interpersonal Connections",
      excerpt: "Exploring how V-SYNC unleashes dynamic energy in relationships through revolutionary technology.",
      date: "December 3, 2024",
      image: "/placeholder.svg?height=200&width=300",
      content: `In the ever-evolving landscape of relationships, the term "verve" emerges as the heartbeat of dynamic and energetic connections. It encapsulates the essence of vibrant and engaged interactions, where individuals actively and energetically connect with one another, creating a symphony of physiological synchrony and genuine interpersonal bonds. Now, imagine infusing this verve into the very fabric of your connections with the revolutionary V-SYNC.

**V-SYNC: Unleashing the Verve Revolution**

In a world buzzing with constant activity, finding connections that exude a dynamic energy can be a real game-changer. V-SYNC steps onto the stage as the conductor of the verve revolution, transforming the way we perceive and experience relationships. Picture this: a tool that not only helps you find like-minded souls but enhances the very quality of your interactions, syncing your physiological responses for a truly vibrant connection.

**The Harmony of Humming: V-SYNC's Verve Symphony**

V-SYNC doesn't just find matches; it orchestrates a symphony of verve. It takes the concept of verve beyond the ordinary and infuses it with the magic of humming. Humming, a natural expression of our inner rhythms, becomes the key to unlocking the vibrant potential of every connection. Imagine the excitement and passion translated into a harmonious hum, resonating between two individuals in perfect synchrony.

V-SYNC acts as the catalyst, elevating your interactions to a new level of engagement. It's not just about swiping right or left; it's about creating a musical interlude of connection where verve becomes the driving force.

**Verve-Checked Connections: Beyond Ordinary Relationships**

Verve-checked connections redefine the ordinary and usher in a new era of relationships. With V-SYNC, each connection is infused with the verve that sparks excitement and positive engagement. It's a journey beyond the mundane, where every interaction becomes a thrilling adventure.

Say goodbye to lackluster connections and hello to a world where the verve of your relationships is palpable. V-SYNC ensures that the connections you make are not just ordinary; they're extraordinary, pulsating with the vibrant energy of true verve.

**V-SYNC: Syncing Hearts, Energizing Souls**

V-SYNC isn't just a tool; it's a heart-syncing, soul-energizing experience. It goes beyond the superficial metrics of compatibility and dives deep into the emotional and energetic resonance between individuals. The result? A dance of hearts and a symphony of souls, vibrating in unison with the electric verve that defines meaningful connections.

In a world where the ordinary often overshadows the extraordinary, V-SYNC emerges as the beacon of verve. Let the hums guide you to connections that go beyond the surface, where the dynamic energy of verve reigns supreme. Embrace the revolution, let your connections come alive, and infuse every relationship with the vibrant spirit of V-SYNC.`,
    }
  ]

  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openBlog = (blog) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
  }

  const closeBlog = () => {
    setSelectedBlog(null)
    setIsModalOpen(false)
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blogs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and updates from our research and development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blog.date}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">{blog.title}</CardTitle>
                <CardDescription className="line-clamp-3">{blog.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group" onClick={() => openBlog(blog)}>
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <BlogModal isOpen={isModalOpen} onClose={closeBlog} blog={selectedBlog} />
    </section>
  )
}
