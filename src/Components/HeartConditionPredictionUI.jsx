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
      <div className="w-full lg:w-72 bg-slate-900 p-6 shadow-2xl border-r border-slate-800">
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
            <HeartPulse className="w-7 h-7 text-red-400" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Heart Condition Prediction
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* FORM */}
            <Card className="lg:col-span-2 bg-slate-900 border-none rounded-2xl shadow-xl">
              <CardContent className="p-6 sm:p-8 space-y-6">

                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  Enter Health Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <SelectField label="Sex" options={["Male", "Female"]} />

                  <SelectField
                    label="Age Category"
                    options={[
                      "18-29",
                      "30-39",
                      "40-49",
                      "50-54",
                      "55-64",
                      "65+",
                    ]}
                  />

                  <SelectField
                    label="Race"
                    options={["Asian", "White", "Black", "Other"]}
                  />

                  <SelectField
                    label="BMI Category"
                    options={[
                      "Underweight",
                      "Normal (18.5-25)",
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

                  <SelectField
                    label="Smoking"
                    options={["Yes", "No"]}
                  />

                  <SelectField
                    label="Alcohol Consumption"
                    options={["Yes", "No"]}
                  />

                  <SelectField
                    label="Physical Activity"
                    options={["Active", "Inactive"]}
                  />

                  <SelectField
                    label="Diabetic"
                    options={["Yes", "No"]}
                  />

                  <SelectField
                    label="Previous Stroke"
                    options={["Yes", "No"]}
                  />

                  <div>
                    <label className="text-sm mb-2 block">
                      Hours of Sleep
                    </label>

                    <Input
                      type="number"
                      placeholder="e.g. 7"
                      className="bg-slate-800 border-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm mb-2 block">
                      BMI Value
                    </label>

                    <Input
                      type="number"
                      placeholder="Enter BMI"
                      className="bg-slate-800 border-none"
                    />
                  </div>

                </div>

                <Button className="w-full mt-6 rounded-xl bg-red-500 hover:bg-red-600">
                  Predict Heart Risk
                </Button>

              </CardContent>
            </Card>

            {/* DESCRIPTION + RESULT */}
            <div className="space-y-6">

              <Card className="bg-slate-900 border-none rounded-2xl shadow-xl">
                <CardContent className="p-6 space-y-4">

                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                      alt="Heart"
                      className="w-full h-40 object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-semibold">
                    About This System
                  </h3>

                  <p className="text-sm text-slate-300">
                    This system uses a machine learning model to
                    estimate heart disease risk based on lifestyle
                    and health metrics.
                  </p>

                  <p className="text-sm text-slate-400">
                    Enter accurate health information to receive
                    a prediction generated by the ML model.
                  </p>

                </CardContent>
              </Card>

              {/* Prediction Result */}
              <Card className="bg-slate-900 border-none rounded-2xl shadow-xl">
                <CardContent className="p-6 text-center">

                  <h3 className="text-lg font-semibold mb-3">
                    Prediction Result
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Your result will appear here after prediction.
                  </p>

                </CardContent>
              </Card>

            </div>

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