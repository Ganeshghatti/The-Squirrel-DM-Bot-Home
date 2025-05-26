"use client"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Quessia saves me hours every week. I just type in a question, and it gives me instant, reliable answers—no more digging!",
    name: "Sofia M.",
    title: "Marketing Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    quote:
      "As a designer, I love how Quessia helps me explore design patterns and get clarity on user behavior quickly.",
    name: "Daniel K.",
    title: "UI Designer",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    quote:
      "Whether it's technical questions or strategy advice, it delivers answers that actually help us move forward. I really love it!",
    name: "Kimberly R.",
    title: "Co-founder of NovaStack",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    quote:
      "Quessia has transformed how our team researches. The speed and accuracy are unmatched by any other tool we've used.",
    name: "Alex J.",
    title: "Product Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    quote:
      "I was skeptical at first, but Quessia has become indispensable for our content team. It's like having an expert researcher on call 24/7.",
    name: "Priya T.",
    title: "Content Strategist",
    image: "/placeholder.svg?height=400&width=400",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: "easeOut",
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
      ease: "easeOut",
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
}

export default function UserAreSaying() {
  return (
    <motion.section
      className="py-16 px-4 md:px-6 lg:px-8 max-w-6xl lg:max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="text-center mb-12" variants={headerVariants}>
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4"
          variants={headerVariants}
        >
          Hear What Our <br /> Users Are Saying
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600"
          variants={textVariants}
        >
          Genuine feedback from real Quessia users
        </motion.p>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4 py-5 px-1">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Card className="h-[600px] border border-[#8F8F9226] rounded-3xl overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <motion.div 
                        className="aspect-square max-w-[413px] mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center"
                        variants={imageVariants}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name}'s profile`}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </motion.div>
                      <motion.p 
                        className="text-gray-700 mb-4"
                        variants={textVariants}
                      >
                        {testimonial.quote}
                      </motion.p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start p-0">
                      <motion.h3 
                        className="font-semibold text-lg"
                        variants={textVariants}
                      >
                        {testimonial.name}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-500"
                        variants={textVariants}
                      >
                        {testimonial.title}
                      </motion.p>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <motion.div 
            className="flex items-center justify-center gap-2 mt-8"
            variants={buttonVariants}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CarouselPrevious className="relative static" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CarouselNext className="relative static" />
            </motion.div>
          </motion.div>
        </Carousel>
      </motion.div>

      <motion.div 
        className="flex justify-center mt-12"
        variants={buttonVariants}
      >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button variant="outline" size="lg" className="rounded-full px-8 border-[#8F8F9226]">
            Read All Testimonials
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}