import java.util.Arrays;

public class PartOne {
  public static void main(String[] args) {
    int[][] input = Utils.readFile("input.txt");
    sortLists(input);
    int totalDistance = getDistance(input);
    System.out.println(totalDistance);
  }

  private static int getDistance(int[][] locations) {
    int distance = 0;
    for (int i = 0; i < locations[0].length; i++) {
      distance += Math.abs(locations[0][i] - locations[1][i]);
    }
    return distance;
  }

  private static void sortLists(int[][] lists) {
    for (int[] list : lists) {
      Arrays.sort(list);
    }
  }
}
