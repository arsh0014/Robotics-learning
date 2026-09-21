import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserRole, StudentProfile } from '../types/curriculum';
import { mockStudents } from '../data/mockUsers';

interface AuthContextType {
  role: UserRole | null;
  currentStudent: StudentProfile | null;
  selectedClassId: string;
  setRole: (role: UserRole | null) => void;
  setCurrentStudent: (student: StudentProfile) => void;
  setSelectedClassId: (classId: string) => void;
  loginAsStudent: (studentId?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole | null>(() => {
    const saved = localStorage.getItem('robobox_role');
    return (saved as UserRole) || 'student';
  });

  const [currentStudent, setCurrentStudent] = useState<StudentProfile | null>(() => {
    const saved = localStorage.getItem('robobox_student');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return mockStudents[0];
      }
    }
    return mockStudents[0]; // Default to Aanya
  });

  const [selectedClassId, setSelectedClassId] = useState<string>(() => {
    return localStorage.getItem('robobox_class') || 'class-1';
  });

  useEffect(() => {
    if (role) {
      localStorage.setItem('robobox_role', role);
    } else {
      localStorage.removeItem('robobox_role');
    }
  }, [role]);

  useEffect(() => {
    if (currentStudent) {
      localStorage.setItem('robobox_student', JSON.stringify(currentStudent));
    }
  }, [currentStudent]);

  useEffect(() => {
    localStorage.setItem('robobox_class', selectedClassId);
  }, [selectedClassId]);

  const loginAsStudent = (studentId?: string) => {
    const s = mockStudents.find(st => st.id === studentId) || mockStudents[0];
    setCurrentStudent(s);
    setRole('student');
  };

  const logout = () => {
    setRole(null);
    localStorage.removeItem('robobox_role');
  };

  return (
    <AuthContext.Provider
      value={{
        role,
        currentStudent,
        selectedClassId,
        setRole,
        setCurrentStudent,
        setSelectedClassId,
        loginAsStudent,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
