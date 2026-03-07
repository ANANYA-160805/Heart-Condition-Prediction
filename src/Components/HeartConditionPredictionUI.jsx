import { useState } from "react";
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
            <SelectItem value="heart">
              Heart Disease Prediction
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main */}
      <div className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
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
              <CardContent className="p-6 sm:p-8 space-y-8">

                {/* Personal Information */}
                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Personal Information
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <StepperInput
                      label="Age (Years)"
                      defaultValue={25}
                    />

                    <SelectField
                      label="Gender"
                      options={["Male", "Female"]}
                    />

                    <StepperInput
                      label="BMI"
                      defaultValue={22}
                      step={0.1}
                    />

                    <StepperInput
                      label="Sleep Hours/Day"
                      defaultValue={7}
                      step={0.5}
                    />

                  </div>
                </div>

                {/* Clinical Measurements */}
                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Clinical Measurements
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    <InputField label="Blood Pressure (mmHg)" type="number" />

                    <InputField label="Cholesterol (mg/dL)" type="number" />

                    <InputField label="Triglyceride (mg/dL)" type="number" />

                    <InputField label="Fasting Blood Sugar (mg/dL)" type="number" />

                    <InputField label="CRP Level (mg/L)" type="number" />

                    <InputField label="Homocysteine (mmol/L)" type="number" />

                  </div>
                </div>

                {/* Health & Lifestyle */}
<div>
  <h2 className="text-lg font-semibold mb-4">
    Health & Lifestyle
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

    <SelectField
      label="Smoking"
      options={["Yes", "No"]}
    />

    <SelectField
      label="Diabetes"
      options={["Yes", "No"]}
    />

    <SelectField
      label="Family History"
      options={["Yes", "No"]}
    />

    <SelectField
      label="High BP"
      options={["Yes", "No"]}
    />

    <SelectField
      label="Low HDL"
      options={["Yes", "No"]}
    />

    <SelectField
      label="High LDL"
      options={["Yes", "No"]}
    />

    <SelectField
      label="Exercise"
      options={[
        "None",
        "Light",
        "Moderate",
        "Regular",
      ]}
    />

    <SelectField
      label="Alcohol"
      options={[
        "Never",
        "Occasionally",
        "Regular",
      ]}
    />

    <SelectField
      label="Stress Level"
      options={[
        "Low",
        "Moderate",
        "High",
      ]}
    />

    <SelectField
      label="Sugar Intake"
      options={[
        "Low",
        "Moderate",
        "High",
      ]}
    />

  </div>
</div>

                <Button className="w-full mt-4 rounded-xl bg-red-500 hover:bg-red-600">
                  Predict Heart Risk
                </Button>

              </CardContent>
            </Card>

            {/* INFO PANEL */}
            <div className="space-y-6">

              <Card className="bg-slate-900 border-none rounded-2xl shadow-xl">
                <CardContent className="p-6 space-y-4">

                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                    alt="Heart"
                    className="rounded-xl h-40 w-full object-cover"
                  />

                  <h3 className="text-lg font-semibold">
                    About This System
                  </h3>

                  <p className="text-sm text-slate-300">
                    This system uses machine learning models to
                    estimate heart disease risk using clinical
                    measurements and lifestyle data.
                  </p>

                </CardContent>
              </Card>

              {/* Result Box */}
              <Card className="bg-slate-900 border-none rounded-2xl shadow-xl">
                <CardContent className="p-6 text-center">

                  <h3 className="text-lg font-semibold mb-3">
                    Prediction Result
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Your prediction will appear here.
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

/* Stepper Input */

function StepperInput({ label, defaultValue = 0, step = 1 }) {
  const [value, setValue] = useState(defaultValue);

  const increase = () => setValue((v) => v + step);
  const decrease = () => setValue((v) => Math.max(0, v - step));

  return (
    <div>
      <label className="text-sm mb-2 block">{label}</label>

      <div className="flex items-center bg-slate-800 rounded-lg overflow-hidden">

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="flex-1 bg-transparent px-3 py-2 outline-none"
        />

        <div className="flex flex-col border-l border-slate-700">

          <button
            onClick={increase}
            className="px-3 py-1 hover:bg-slate-700"
          >
            +
          </button>

          <button
            onClick={decrease}
            className="px-3 py-1 hover:bg-slate-700"
          >
            −
          </button>

        </div>

      </div>
    </div>
  );
}

/* Select Field */

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
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

/* Input Field */

function InputField({ label, type = "text" }) {
  return (
    <div>
      <label className="text-sm mb-2 block">{label}</label>

      <Input
        type={type}
        className="bg-slate-800 border-none"
      />
    </div>
  );
}