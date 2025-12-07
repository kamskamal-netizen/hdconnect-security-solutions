import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/data/content";
import { useParams } from "react-router-dom";

const LegalPage = () => {
  const { type } = useParams<{ type: 'mentions-legales' | 'politique-confidentialite' }>();
  
  const legalData = type === 'mentions-legales' 
    ? content.legal.mentions 
    : content.legal.privacy;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          {legalData.title}
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground whitespace-pre-line">
            {legalData.content}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
