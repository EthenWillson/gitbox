#include<stdio.h>
int a[100][5];
int i,j,averge,n,temp;
int arrange()
{
	for(i=0;i<n;i++)
	{
		for(j=i+1;j<n;j++)
		{
			if(a[i][3]<a[j][3])
			{
				temp=a[i][3];
				a[i][3]=a[j][3];
				a[j][3]=temp;
				temp=a[i][4];
				a[i][4]=a[j][4];
				a[j][4]=temp;
			}
		}
	}
	printf("*******************************\n");
	printf("ƽ���ִӸߵ���������\n");
	for(i=0;i<=n-1;i++){
		printf("��%d��---%d��ͬѧ��ƽ���֣�%d\n",i+1,a[i][4]+1,a[i][3]);	
	}
} 
int main()
{
	printf("The number of students:");
	scanf("%d",&n);
	for(i=0;i<=n-1;i++)
	{
		printf("%d��ѧ����\n",i+1);
		for(j=0;j<=2;j++)
		{
			printf("��%d�Ƴɼ���",j+1);
			scanf("%d",&a[i][j]);
		}
		a[i][3]=(a[i][0]+a[i][1]+a[i][2])/3;
		a[i][4]=i;
		printf("\n");
	}
	arrange();
}
