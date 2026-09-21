import React, { useState } from 'react';
import { 
  Cpu, 
  Settings, 
  Building2, 
  Zap, 
  Terminal, 
  Bot, 
  PenTool
} from 'lucide-react';
import { HumanoidRobotExplorer } from './HumanoidRobotExplorer';
import { ThreeDPenStudio } from './ThreeDPenStudio';
import { GearBoxSimulator } from './GearBoxSimulator';
import { MegastructureStudio } from './MegastructureStudio';
import { CircuitLab } from './CircuitLab';
import { LogicGatesWaterAlarm } from './LogicGatesWaterAlarm';
import { PictoBloxStudio } from './PictoBloxStudio';

interface Class4StemLabProps {
  initialTab?: string;
  onBack?: () => void;
}

export const Class4StemLab: React.FC<Class4StemLabProps> = ({ initialTab = 'gears', onBack }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const tabs = [
    { id: 'humanoid', label: 'Humanoid & Asimov', icon: Bot, chapter: 'Ch 1' },
    { id: '3dpen', label: '3D Pen Studio', icon: PenTool, chapter: 'Ch 2' },
    { id: 'gears', label: 'Gearbox & 4WD', icon: Settings, chapter: 'Ch 3' },
    { id: 'megastructures', label: 'Megastructures & Wheel', icon: Building2, chapter: 'Ch 4' },
    { id: 'circuits', label: 'Electro Magnetics I', icon: Zap, chapter: 'Ch 5' },
    { id: 'logic', label: 'Gates & Water Alarms', icon: Cpu, chapter: 'Ch 6' },
    { id: 'pictoblox', label: 'PictoBlox AI Coding', icon: Terminal, chapter: 'Ch 7' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 rounded-3xl p-6 text-white shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-200 text-xs font-bold uppercase tracking-wider mb-1">
            <Cpu className="w-4 h-4" />
            <span>Class 4 Interactive STEM Innovation Laboratory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">
            Standard 4 Engineering & Robotics Lab
          </h1>
          <p className="text-amber-100 text-sm mt-1 max-w-2xl">
            Hands-on simulation studio based on the official RoboBox Std 4 curriculum. Explore 7 interactive modules from mechanical gear ratios to semiconductor logic gates and PictoBlox AI!
          </p>
        </div>

        {onBack && (
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-xs font-bold transition-all border border-white/20"
          >
            ← Back to Dashboard
          </button>
        )}
      </div>

      {/* Lab Tabs Navigation */}
      <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                isActive
                  ? 'bg-amber-600 text-white shadow-amber-600/30 shadow-md ring-2 ring-amber-500'
                  : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
              }`}
            >
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-black ${
                isActive ? 'bg-amber-800 text-amber-200' : 'bg-slate-100 text-slate-500'
              }`}>
                {tab.chapter}
              </span>
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Render Active Lab Module */}
      <div className="transition-all duration-200">
        {activeTab === 'humanoid' && <HumanoidRobotExplorer />}
        {activeTab === '3dpen' && <ThreeDPenStudio />}
        {activeTab === 'gears' && <GearBoxSimulator />}
        {activeTab === 'megastructures' && <MegastructureStudio />}
        {activeTab === 'circuits' && <CircuitLab />}
        {activeTab === 'logic' && <LogicGatesWaterAlarm />}
        {activeTab === 'pictoblox' && <PictoBloxStudio />}
      </div>
    </div>
  );
};
export default Class4StemLab;
