import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Utils {
  public static int[][] readFile(String filePath) {
    try {
      File input = new File(filePath);
      Scanner read = new Scanner(input);

      int[][] result = new int[2][1000];
      int idx = 0;

      while (read.hasNextLine()) {
        String data = read.nextLine();
        String[] sep = data.split("   ");

        // covert String to integer
        result[0][idx] = Integer.parseInt(sep[0]);
        result[1][idx] = Integer.parseInt(sep[1]);
        idx++;
      }
      read.close();

      return result;

    } catch (FileNotFoundException e) {
      System.out.println("File not found");
      return new int[0][];
    }
  }

}
