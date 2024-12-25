import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    List<int[]> input = getInput();
    PartOne(input);
    PartTwo(input);
  }

  private static void PartOne(List<int[]> input) {
    int partOne = 0;
    for (int[] line : input) {
      Boolean last = null;
      for (int i = 1; i < line.length; i++) {
        int diff = line[i] - line[i - 1];
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3 || last != null && last != diff < 0) {
          continue;
        }

        last = diff < 0;
      }
      partOne++;
    }
    System.out.println("Part One: " + partOne);
  }

  private static void PartTwo(List<int[]> input) {
    int partTwo = 0;

    for (int[] line : input) {

      Boolean last = null;
      Integer idxToAvoid = null;

      for (int i = 1; i < line.length; i++) {
        int diff = line[i] - line[i - 1];

        // Fix this
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3 || last != null && last != diff < 0) {
          if (idxToAvoid != null)
            break;
          idxToAvoid = i;
          continue;
        }

        last = diff < 0;
      }
      partTwo++;
    }

    System.out.println("Part Two: " + partTwo);
  }

  private static List<int[]> getInput() {
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
