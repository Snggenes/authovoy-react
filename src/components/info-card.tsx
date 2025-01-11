import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { ShieldCheck, Code, Layers } from "lucide-react";
  
  export default function InfoCard() {
    return (
      <Card className="hidden lg:block w-[400px] shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Empower Your App</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Unlock seamless identity management and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <ShieldCheck className="h-6 w-6 text-blue-600" />
            <div>
              <h4 className="font-semibold text-lg">Build trust effortlessly</h4>
              <p className="text-sm text-gray-700">
                Give your users confidence with enterprise-grade security and
                privacy baked into every interaction.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Code className="h-6 w-6 text-green-600" />
            <div>
              <h4 className="font-semibold text-lg">Simplify integration</h4>
              <p className="text-sm text-gray-700">
                Spend less time debugging and more time innovating. Our tools are
                designed to get you up and running in no time.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Layers className="h-6 w-6 text-purple-600" />
            <div>
              <h4 className="font-semibold text-lg">Tailored to your needs</h4>
              <p className="text-sm text-gray-700">
                Whether you’re scaling up or starting fresh, our platform adapts
                to your app’s identity needs without compromise.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-center text-gray-500 text-sm">
          <p>Your partner in building secure, scalable apps.</p>
        </CardFooter>
      </Card>
    );
  }
  