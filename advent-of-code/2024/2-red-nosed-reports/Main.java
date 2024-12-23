
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    List<int[]> input = parseFile();
    PartOne(input);
    PartTwo(input);
  }

  private static void PartOne(List<int[]> input) {
    int partOne = 0;

    for (int[] line : input) {
      partOne += isSafe(line) ? 1 : 0;
    }
    System.out.println("Part One: " + partOne);
  }

  private static void PartTwo(List<int[]> input) {
    int partTwo = 0;

    for (int[] line : input) {
      partTwo += isSafeTwo(line) ? 1 : 0;
    }
    System.out.println("Part Two: " + partTwo);
  }

  private static boolean isSafeTwo(int[] levels) {
    Boolean last = null;
    boolean passed = false;
    for (int i = 1; i < levels.length; i++) {
      int diff = levels[i] - levels[i - 1];

      // Fix this
      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        if (passed)
          return false;
        passed = true;
      }
      if (last != null && last != diff < 0) {
        if (passed)
          return false;
        passed = true;
      }

      last = diff < 0;
    }
    return true;
  }

  private static boolean isSafe(int[] levels) {
    Boolean last = null;
    for (int i = 1; i < levels.length; i++) {
      int diff = levels[i] - levels[i - 1];
      if (Math.abs(diff) < 1 || Math.abs(diff) > 3)
        return false;
      if (last != null && last != diff < 0)
        return false;

      last = diff < 0;
    }
    return true;
  }

  private static List<int[]> parseFile() {
    try {
      Scanner scanner = new Scanner(new File("input.txt"));
      List<int[]> result = new ArrayList<int[]>();

      while (scanner.hasNextLine()) {
        String line = scanner.nextLine();
        String[] sep = line.split(" ");
        int[] parsedLine;
        parsedLine = new int[sep.length];

        for (int i = 0; i < sep.length; i++) {
          parsedLine[i] = Integer.parseInt(sep[i]);
        }
        result.add(parsedLine);
      }

      scanner.close();
      return result;

    } catch (FileNotFoundException e) {
      throw new RuntimeException("File not found");
    }

  }
}
