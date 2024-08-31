import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/meals';
import { useRoute, RouteProp } from '@react-navigation/native';

// Định nghĩa kiểu cho params của route
type RootStackParamList = {
  MealDetail: { mealId: string };
};

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, 'MealDetail'>;

// Định nghĩa kiểu cho một món ăn
type Meal = {
  id: string;
  categoryId: string;
  name: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  ingredients: string[];
  steps: string[];
};

const MealDetailScreen = () => {
  const route = useRoute<MealDetailScreenRouteProp>();
  const { mealId } = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId) as Meal | undefined;

  if (!selectedMeal) {
    return <Text>Không tìm thấy món ăn.</Text>;
  }

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.name}</Text>
      <View style={styles.details}>
        <Text>Thời gian nấu: {selectedMeal.duration}m</Text>
        <Text>Độ phức tạp: {selectedMeal.complexity}</Text>
        <Text>Chi phí: {selectedMeal.affordability}</Text>
      </View>
      <Text style={styles.subtitle}>Nguyên liệu:</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient} style={styles.listItem}>{ingredient}</Text>
      ))}
      <Text style={styles.subtitle}>Các bước thực hiện:</Text>
      {selectedMeal.steps.map(step => (
        <Text key={step} style={styles.listItem}>{step}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
  listItem: {
    marginHorizontal: 12,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 4,
  },
});

export default MealDetailScreen;