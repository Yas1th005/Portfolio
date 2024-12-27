import { AnimatedTestimonials } from "../components/ui/testimonials";
import univ from "../Images/university.jpeg"

export function AnimatedTestimonialsDemo() {
    const abc = univ;



  const testimonials = [
    {
      quote2:"CGPA: 9.14",
      quote3:"Course Representative in",
      quote4:"Computer Networks and",
      quote5:"Database Management System.",
      name: "Vellore Institute of Technology",
      src: abc,
    },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: {col1},
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: {col2},
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
