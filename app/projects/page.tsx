import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-32 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid gap-8">
        <ProjectCard
          title="CradleWatch"
          description="AI-powered infant monitoring system for emotional distress detection."
          image="/projects/cradlewatch.png"
          github="https://github.com/yourusername/cradlewatch"
          modalContent={
            <>
              <p>
                CradleWatch is an AI-powered infant monitoring system that
                detects emotional distress and responds in real time.
              </p>

              <p>
                Designed to address early signs of SIDS and improve caregiver
                awareness, it combines deep learning, facial tracking, and
                embedded hardware into a fully functional prototype.
              </p>

              <h4 className="text-white font-semibold">Software System</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>MediaPipe Face Mesh for 3D facial landmark extraction</li>
                <li>Vision Transformer for emotion classification</li>
                <li>Flask + OpenCV live video streaming</li>
              </ul>

              <h4 className="text-white font-semibold">Hardware Integration</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Raspberry Pi edge processing</li>
                <li>I²C environmental sensors</li>
                <li>PCA9685 pan-tilt camera control</li>
              </ul>
            </>
          }
        />
      </div>
    </main>
  );
}
