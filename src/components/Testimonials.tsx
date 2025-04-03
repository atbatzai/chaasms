
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company: string;
}

const TestimonialCard = ({ quote, author, title, company }: TestimonialProps) => (
  <Card className="border-0 shadow-sm bg-white overflow-hidden">
    <CardContent className="p-8 pt-10 relative">
      <div className="absolute -top-6 -left-6 w-16 h-16 bg-soft-purple/30 rounded-full blur-xl"></div>
      <div className="absolute top-8 right-8">
        <Quote className="text-chaasms-blue/20" size={50} />
      </div>
      <blockquote className="text-lg text-chaasms-text italic mb-6 relative z-10">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-chaasms-blue/20 to-purple-400/20 flex items-center justify-center mr-4">
          <span className="text-chaasms-blue text-xl font-medium">{author.charAt(0)}</span>
        </div>
        <div>
          <div className="font-medium text-chaasms-dark">{author}</div>
          <div className="text-sm text-gray-500">{title}, {company}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The CHAASMS framework completely transformed our partner strategy. We've seen a 3x increase in partner-led revenue in just 6 months.",
      author: "Sarah Johnson",
      title: "VP of Partnerships",
      company: "CloudTech Solutions"
    },
    {
      quote: "Implementation was seamless and the structure brought clarity to our entire organization. We now have a unified approach to our ecosystem strategy.",
      author: "Michael Chen",
      title: "Chief Revenue Officer",
      company: "DataSync Pro"
    },
    {
      quote: "The marketplace strategy component alone was worth the investment. We've optimized our listings and seen a dramatic improvement in conversion.",
      author: "Alex Rodriguez",
      title: "Head of Business Development",
      company: "SecureFlow"
    },
    {
      quote: "CHAASMS provided the roadmap we needed to scale our partner program from regional to global. The results speak for themselves.",
      author: "Emily Parker",
      title: "Global Partnerships Director",
      company: "IntegrateAI"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute -left-20 top-1/3 w-40 h-40 bg-soft-purple/30 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 top-2/3 w-40 h-40 bg-soft-blue/30 rounded-full blur-3xl"></div>
      
      <div className="chaasms-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-6 font-playfair">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hear from ISVs who have implemented the CHAASMS framework in their channel strategy.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full px-4"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                  company={testimonial.company}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static -translate-y-0 rounded-full bg-white border-chaasms-blue/20 hover:bg-chaasms-blue hover:text-white" />
            <CarouselNext className="relative static -translate-y-0 rounded-full bg-white border-chaasms-blue/20 hover:bg-chaasms-blue hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
