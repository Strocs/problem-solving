public class PartTwo {
  public static void main(String[] args) {
    int[][] input = Utils.readFile("input.txt");
    int totalScore = getSimilarityScore(input);
    System.out.println(totalScore);
  }

  private static int getSimilarityScore(int[][] lists) {
    int[] left = lists[0];
    int[] right = lists[1];

    int totalScore = 0;

    for (int current : left) {
      int count = 0;
      for (int item : right) {
        if (current == item)
          count++;
      }
      totalScore += current * count;
    }
    return totalScore;
  }
}
