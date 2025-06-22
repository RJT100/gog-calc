import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const fruits = [
  { name: "Carrot", avg: 22 },
  { name: "Strawberry", avg: 19 },
  { name: "Blueberry", avg: 21 },
  { name: "Tomato", avg: 35 },
  { name: "Cauliflower", avg: 40 },
  { name: "Avocado", avg: 150 },
  { name: "Pear", avg: 553 },
  { name: "Watermelon", avg: 2905 },
  { name: "Green Apple", avg: 280 },
  { name: "Peach", avg: 283 },
  { name: "Pineapple", avg: 2350 },
  { name: "Kiwi", avg: 400 },
  { name: "Bell Pepper", avg: 190 },
  { name: "Prickly Pear", avg: 350 },
  { name: "Banana", avg: 1200 },
  { name: "Parasol Flower", avg: 500 },
  { name: "Loquat", avg: 620 },
  { name: "Feijoa", avg: 700 },
  { name: "Dragon Pepper", avg: 80221 },
  { name: "Rosy Delight", avg: 15000 },
  { name: "Sugar Apple", avg: 43320 },
  { name: "Elephant Ears", avg: 35000 },
  { name: "Chocolate Carrot", avg: 1500 },
  { name: "Pink Tulip", avg: 1200 },
  { name: "Orange Tulip", avg: 792 },
  { name: "Rose", avg: 900 },
  { name: "Red Lollipop", avg: 2500 },
  { name: "Nightshade", avg: 2300 },
  { name: "Manuka Flower", avg: 1100 },
  { name: "Lavender", avg: 1300 },
  { name: "Crocus", avg: 27075 },
  { name: "Corn", avg: 44 },
  { name: "Daffodil", avg: 988 },
  { name: "Raspberry", avg: 98 },
  { name: "Candy Sunflower", avg: 4000 },
  { name: "Mint", avg: 6800 },
  { name: "Glowshroom", avg: 282 },
  { name: "Blue Lollipop", avg: 2600 },
  { name: "Dandelion", avg: 700 },
  { name: "Nectarshade", avg: 4200 },
  { name: "Foxglove", avg: 850 },
  { name: "Succulent", avg: 19500 },
  { name: "Bee Balm", avg: 16245 },
  { name: "Noble Flower", avg: 1000 },
  { name: "Traveler's Fruit", avg: 5600 },
  { name: "Pumpkin", avg: 3854 },
  { name: "Bamboo", avg: 3944 },
  { name: "Cranberry", avg: 3100 },
  { name: "Durian", avg: 15000 },
  { name: "Easter Egg", avg: 1000 },
  { name: "Moonflower", avg: 8900 },
  { name: "Starfruit", avg: 14100 },
  { name: "Papaya", avg: 4000 },
  { name: "Lilac", avg: 1200 },
  { name: "Lumira", avg: 5000 },
  { name: "Violet Corn", avg: 45000 },
  { name: "Nectar Thorn", avg: 40111 },
  { name: "Coconut", avg: 2670 },
  { name: "Mango", avg: 6308 },
  { name: "Cactus", avg: 3224 },
  { name: "Dragon Fruit", avg: 4566 },
  { name: "Celestiberry", avg: 9100 },
  { name: "Blood Banana", avg: 6100 },
  { name: "Moon Melon", avg: 17750 },
  { name: "Eggplant", avg: 1700 },
  { name: "Passionfruit", avg: 5000 },
  { name: "Moon Mango", avg: 24340 },
  { name: "Lemon", avg: 400 },
  { name: "Purple Cabbage", avg: 2200 },
  { name: "Honeysuckle", avg: 1100 },
  { name: "Nectarine", avg: 36100 },
  { name: "Pink Lily", avg: 1300 },
  { name: "Purple Dahlia", avg: 1400 },
  { name: "Bendboo", avg: 139888 },
  { name: "Cocovine", avg: 60166 },
  { name: "Ice Cream Bean", avg: 1800 },
  { name: "Grape", avg: 7554 },
  { name: "Mushroom", avg: 142443 },
  { name: "Cherry Blossom", avg: 3600 },
  { name: "Crimson Vine", avg: 12000 },
  { name: "Candy Blossom", avg: 11500 },
  { name: "Lotus", avg: 4200 },
  { name: "Venus Fly Trap", avg: 6000 },
  { name: "Cursed Fruit", avg: 50000 },
  { name: "Soul Fruit", avg: 75000 },
  { name: "Mega Mushroom", avg: 200000 },
  { name: "Moon Blossom", avg: 53512 },
  { name: "Pepper", avg: 7577 },
  { name: "Cacao", avg: 10456 },
  { name: "Hive Fruit", avg: 23000 },
  { name: "Sunflower", avg: 3000 },
  { name: "Beanstalk", avg: 18788 },
  { name: "Ember Lily", avg: 3500 }
];

const mutations = [
  { name: "Ripe", multiplier: 1 },
  { name: "Gold", multiplier: 20 },
  { name: "Rainbow", multiplier: 50 },
  { name: "Wet", multiplier: 2 },
  { name: "Windstruck", multiplier: 2 },
  { name: "Moonlit", multiplier: 2 },
  { name: "Chilled", multiplier: 2 },
  { name: "Bloodlit", multiplier: 4 },
  { name: "Twisted", multiplier: 5 },
  { name: "Frozen", multiplier: 10 },
  { name: "Shocked", multiplier: 100 },
  { name: "Celestial", multiplier: 120 },
  { name: "Choc", multiplier: 2 },
  { name: "Pollinated", multiplier: 3 },
  { name: "Disco", multiplier: 125 }
];

export default function MutationProfitCalculator() {
  const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
  const [selectedMutations, setSelectedMutations] = useState([]);

  const totalMultiplier = selectedMutations.reduce(
    (total, mutation) => total * mutation.multiplier,
    1
  );

  const baseValue = selectedFruit.avg;
  const totalProfit = baseValue * totalMultiplier;

  const toggleMutation = (mutation) => {
    setSelectedMutations((prev) =>
      prev.includes(mutation)
        ? prev.filter((m) => m !== mutation)
        : [...prev, mutation]
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(to bottom, #a0c8f0 0%, #dff1ff 70%),
          url('https://i.ibb.co/5YxvJHZ/clouds.png') repeat-x`,
        backgroundSize: "contain",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem"
      }}
    >
      <Card style={{ maxWidth: "480px", width: "100%" }}>
        <CardContent className="space-y-4 pt-4">
          <h1 className="text-2xl font-bold text-center">Grow a Garden: Mutation Profit Calculator</h1>

          <div className="space-y-4">
            <div>
              <Label>Choose Fruit:</Label>
              <select
                className="w-full p-2 rounded border"
                value={selectedFruit.name}
                onChange={(e) =>
                  setSelectedFruit(fruits.find((f) => f.name === e.target.value))
                }
              >
                {fruits.map((fruit) => (
                  <option key={fruit.name} value={fruit.name}>
                    {fruit.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label>Mutations:</Label>
              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-auto">
                {mutations.map((mutation) => (
                  <div key={mutation.name} className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedMutations.includes(mutation)}
                      onCheckedChange={() => toggleMutation(mutation)}
                      id={mutation.name}
                    />
                    <Label htmlFor={mutation.name}>
                      {mutation.name} (×{mutation.multiplier})
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 text-center">
              <h2 className="text-xl font-semibold">Total Profit:</h2>
              <p className="text-green-600 text-2xl font-bold">
                {totalProfit.toLocaleString()} Sheckles
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
