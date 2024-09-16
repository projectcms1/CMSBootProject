package com.cms.ca;

public class SQLMaker {

	public static void main(String[] args) {
		table_box tb = new table_box();
		String testnumber[] = {"11111111", "22222222", "33333333", "44444444", "55555555"};
		int qitemea[] = {28, 26, 11, 20, 30};
		int ansea[] = {5, 6, 4, 4, 2};
		//for (int n = 0; n < 5; n++) {
		//	tb.getQitem(testnumber[n], qitemea[n]);
		//}
		tb.getAns(testnumber[4], qitemea[4], ansea[4]);
	}

}

class table_box {
	String answord6[] = {"전혀 아니다", "거의 드물다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다", "항상 그렇다"};
	String answord5[] = {"전혀 그렇지 않다", "그렇지 않다", "보통이다", "그렇다", "매우 그렇다"};
	String answord4[] = {"전혀 그렇지 않다", "그렇지 않다", "그렇다", "매우 그렇다"};
	String answord2[] = {"아니다", "그렇다"};
	
	public void getQitem(String test, int qea) {
		String testno = test.substring(0, 1);
		for (int n = 1; n <= qea; n++) {
			if (n < 10) {
				System.out.print("('" + testno + "0" + n);
			}
			else {
				System.out.print("('" + testno + n);
			}
			System.out.println("', '문항의문장복붙하기', 'Y', '" + test + "'),");
		}
		
	}
	
	public void getAns(String test, int qea, int aea) {
		String testno = test.substring(0, 1);
		String no4 = testno + testno + testno + testno;
		//System.out.println(testno);
		for (int n = 1; n <= qea; n++) {
			for (int f = 1; f <= aea; f++) {
				if (n < 10) {
					System.out.print("('" + no4 + "0" + n + "0" + f);
				}
				else {
					System.out.print("('" + no4 + n + "0" + f);
				}
				
				if (n < 10) {
					System.out.print("', '" + testno + "0" + n + "', '");
				}
				else {
					System.out.print("', '" + testno + n + "', '");
				}
				System.out.println(this.answord2[f - 1] + "', '" + f + "', 'Y'),");
			}
		}
	}
}