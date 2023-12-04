import { FlatList, ListRenderItem, Text, View } from 'react-native';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCategory, useQuestion } from 'hooks';
import { Question } from 'types';
import QuestionCard from 'components/Cards/QuestionCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryCard from 'components/Cards/CategoryCard';
import { responsiveHeight } from 'constants/Dimensions';
import HomeHeader from 'components/Headers/HomeHeader';
import FreePremiumCard from 'components/Cards/FreePremiumCard';

const HomeScreen = () => {
  const { questions, fetchQuestions } = useQuestion();
  const { categories, fetchCategories } = useCategory();

  useFocusEffect(React.useCallback(() => {
    fetchQuestions();
    fetchCategories();
  }, []));

  const renderQuestions: ListRenderItem<Question> = ({ item }) => <QuestionCard item={item} />;
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <FlatList
        data={[]}
        renderItem={() => null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <HomeHeader />
            <FreePremiumCard />
          </View>
        }
        ListEmptyComponent={
          <View>
            <Text style={{paddingLeft:responsiveHeight(24)}}>
              Get Started
            </Text>
            <FlatList
              horizontal
              data={questions}
              keyExtractor={item => `${item.id.toString()}_${item.title}`}
              renderItem={renderQuestions}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: responsiveHeight(24),paddingTop:responsiveHeight(16) }}
            />
          </View>
        }
        ListFooterComponentStyle={{ padding: responsiveHeight(24) }}
        ListFooterComponent={
          <FlatList
            numColumns={2}
            data={categories}
            keyExtractor={item => `${item.id.toString()}_${item.name}`}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            renderItem={({ item }) => <CategoryCard item={item} />}
          />
        }
      />

    </SafeAreaView>
  );
};

export default HomeScreen;