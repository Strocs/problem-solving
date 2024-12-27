import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    List<List<Integer>> input = getInput();

    int firstResult = 0;
    int secondResult = 0;

    for (List<Integer> line : input) {
      if (firstPuzzle(line))
        firstResult++;

      if (secondPuzzle(line))
        secondResult++;
    }

    System.out.println("First puzzle: " + firstResult);
    System.out.println("Second puzzle: " + secondResult);
  }

  private static boolean firstPuzzle(List<Integer> line) {
    if (isSafe(line)) {
      return true;
    }

    return false;
  }

  private static boolean secondPuzzle(List<Integer> line) {
    for (int i = 0; i < line.size(); i++) {
      List<Integer> newList = new ArrayList<>(line);
      newList.remove(i);

      if (isSafe(newList)) {
        return true;
      }
    }
    return false;
  }

  private static boolean isSafe(List<Integer> line) {
    boolean isSafe = true;
    for (int j = 1; j < line.size(); j++) {
      int diff = line.get(j) - line.get(j - 1);
      if (!isRangeValid(diff) || j > 1 && !isDirectionValid(line.get(j - 1) - line.get(j - 2), diff)) {
        isSafe = false;
        break;
      }
    }
    return isSafe;
  }

  private static boolean isRangeValid(int diff) {
    return Math.abs(diff) >= 1 && Math.abs(diff) <= 3;
  }

  private static boolean isDirectionValid(int prevDiff, int currDiff) {
    if (currDiff == 0)
      return false;
    return (prevDiff > 0 && currDiff > 0) || (prevDiff < 0 && currDiff < 0);
  }

  private static List<List<Integer>> getInput() {
    try {
      return Files.readAllLines(Paths.get("input.txt"))
          .stream()
          .map(line -> Arrays.stream(line.split(" "))
              .map(Integer::parseInt)
              .toList())
          .toList();

    } catch (IOException e) {
      throw new RuntimeException("File not found", e);
    }
  }
}
