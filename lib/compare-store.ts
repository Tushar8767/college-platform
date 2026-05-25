import { create } from "zustand";

type College = {
  id: string;
  name: string;
  location: string;
  state: string;
  fees: number;
  rating: number;
  nirfRank: number;
  placementPercentage: number;
  averagePackage: number;
  image: string;
};

type CompareStore = {
    comparedColleges: College[];

  toggleCollege: (
    college: College
  ) => void;

  removeCollege: (id: string) => void;

  clearColleges: () => void;
};

export const useCompareStore =
  create<CompareStore>((set, get) => ({
    comparedColleges: [],

    toggleCollege: (college) => {
      const exists =
        get().comparedColleges.find(
          (c) => c.id === college.id
        );

      // REMOVE IF ALREADY SELECTED
      if (exists) {
        set({
            comparedColleges:
            get().comparedColleges.filter(
              (c) => c.id !== college.id
            ),
        });

        return;
      }

      // LIMIT TO 3 COLLEGES
      if (get().comparedColleges.length >= 3) {
        alert(
          "You can compare maximum 3 colleges only."
        );

        return;
      }

      // ADD COLLEGE
      set({
        comparedColleges: [
          ...get().comparedColleges,
          college,
        ],
      });
    },

    removeCollege: (id) => {
      set({
        comparedColleges:
          get().comparedColleges.filter(
            (c) => c.id !== id
          ),
      });
    },

    clearColleges: () => {
      set({
        comparedColleges: [],
      });
    },
  }));