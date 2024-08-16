import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { categories } from "../constants/index";
import { getCategories } from "../api";
import { urlFor } from "../sanity";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoreis, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoreis.map((category, index) => {
          const isActive = category._id === activeCategory;
          const btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          const txtClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";

          // Make sure to return the JSX
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                className={`p-1 rounded-full shadow ${btnClass}`}
                onPress={() => setActiveCategory(category._id)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: urlFor(category.image).url() }}
                />
              </TouchableOpacity>
              <Text className={`text-sm text-center ${txtClass}`}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
