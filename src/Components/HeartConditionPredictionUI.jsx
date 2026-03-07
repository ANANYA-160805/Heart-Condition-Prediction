
import { motion } from "framer-motion";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HeartPulse } from "lucide-react";

export default function HeartConditionPredictionUI() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <div className="w-72 bg-slate-900 p-6 shadow-2xl">
        <h2 className="text-lg font-semibold mb-6">Select Disease</h2>
        <Select>
          <SelectTrigger className="w-full bg-slate-800 border-none">
            <SelectValue placeholder="Heart Disease Prediction" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="heart">Heart Disease Prediction</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <HeartPulse className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Heart Condition Prediction using ML</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <Card className="lg:col-span-2 bg-slate-900 border-none rounded-2xl shadow-xl">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-xl font-semibold mb-4">Provide All Inputs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField label="Race" options={["Asian", "White", "Black", "Other"]} />
                  <SelectField label="Sex" options={["Male", "Female"]} />
                  <SelectField label="Age Category" options={["18-29", "30-39", "40-49", "50-54", "55-64"]} />
                  <SelectField label="BMI Category" options={["Underweight", "Normal weight (18.5-25)", "Overweight", "Obese"]} />
                  <SelectField label="General Health" options={["Excellent", "Very Good", "Good", "Fair", "Poor"]} />
                  <div>
                    <label className="text-sm mb-2 block">Hours of Sleep (Avg)</label>
                    <Input type="number" placeholder="Enter hours" className="bg-slate-800 border-none" />
                  </div>
                </div>

                <Button className="w-full mt-6 rounded-2xl">Predict</Button>
              </CardContent>
            </Card>

            {/* Description Section */}
            <Card className="bg-slate-900 border-none rounded-2xl shadow-xl">
              <CardContent className="p-6 space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                    alt="Heart Illustration"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Descriptions</h3>
                <p className="text-sm text-slate-300">
                  This application uses a machine learning model to estimate the probability
                  of heart disease based on user-provided health metrics.
                </p>
                <p className="text-sm text-slate-400">
                  Provide accurate inputs to receive a more reliable prediction result.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SelectField({ label, options }) {
  return (
    <div>
      <label className="text-sm mb-2 block">{label}</label>
      <Select>
        <SelectTrigger className="w-full bg-slate-800 border-none">
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
