import { motion } from "framer-motion";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

export default function HeartConditionPredictionUI() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row">
      
      {/* Sidebar */}
      <div className="w-full lg:w-72 bg-slate-900 p-6 shadow-2xl">
        <h2 className="text-lg font-semibold mb-6">Select Disease</h2>

        <Select>
          <SelectTrigger className="w-full bg-slate-800 border-none">
            <SelectValue placeholder="Heart Disease Prediction" />
          </SelectTrigger>

          <SelectContent className="bg-slate-900 text-white border-slate-700">
            <SelectItem value="heart">Heart Disease Prediction</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <HeartPulse className="w-6 h-6 sm:w-8 sm:h-8" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Heart Condition Prediction 
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Form Section */}
            <Card className="lg:col-span-2 bg-slate-900 border-none rounded-2xl shadow-xl">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  Provide All Inputs
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <SelectField
                    label="Race"
                    options={["Asian", "White", "Black", "Other"]}
                  />

                  <SelectField
                    label="Sex"
                    options={["Male", "Female"]}
                  />

                  <SelectField
                    label="Age Category"
                    options={[
                      "18-29",
                      "30-39",
                      "40-49",
                      "50-54",
                      "55-64",
                    ]}
                  />

                  <SelectField
                    label="BMI Category"
                    options={[
                      "Underweight",
                      "Normal weight (18.5-25)",
                      "Overweight",
                      "Obese",
                    ]}
                  />

                  <SelectField
                    label="General Health"
                    options={[
                      "Excellent",
                      "Very Good",
                      "Good",
                      "Fair",
                      "Poor",
                    ]}
                  />

                  <div>
                    <label className="text-sm mb-2 block">
                      Hours of Sleep (Avg)
                    </label>

                    <Input
                      type="number"
                      placeholder="Enter hours"
                      className="bg-slate-800 border-none"
                    />
                  </div>
                </div>

                <Button className="w-full mt-6 rounded-2xl">
                  Predict
                </Button>
              </CardContent>
            </Card>

            {/* Description Section */}
            <Card className="bg-slate-900 border-none rounded-2xl shadow-xl">
              <CardContent className="p-6 space-y-4">
                
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                    alt="Heart Illustration"
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold">Descriptions</h3>

                <p className="text-sm text-slate-300">
                 Are you wondering about the condition of your heart? i'll help you diagnose your heart health. I'm Dr. AI, your virtual cardiologist. 
                </p>

                <p className="text-sm text-slate-400">
                  Provide accurate inputs to receive a more reliable
                  prediction result.
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

        <SelectContent className="bg-slate-900 text-white border-slate-700">
          {options.map((option, index) => (
            <SelectItem
              key={index}
              value={option}
              className="hover:bg-slate-800"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}